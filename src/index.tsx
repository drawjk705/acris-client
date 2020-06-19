import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { ApolloClient } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';

declare global {
    interface Window {
        __APOLLO_STATE__: any;
    }
}

const client = new ApolloClient({
    cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
    // link: new HttpLink({
    //     uri: 'http://localhost:4000/graphql',
    // }),
});

ReactDOM.hydrate(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ApolloProvider>,
    document.getElementById('root')
);
