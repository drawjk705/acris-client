import { ApolloClient } from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject, ApolloLink } from 'apollo-boost';
import { onError } from 'apollo-link-error';

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
        );
    if (networkError) {
        console.log(`[Network error]: ${networkError}`);
    }
});

export const getApolloClient = (
    links: Array<ApolloLink>
): ApolloClient<NormalizedCacheObject> => {
    const cache = new InMemoryCache();

    return new ApolloClient({
        ssrMode: true,
        link: ApolloLink.from([errorLink, ...links]),
        cache,
    });
};
