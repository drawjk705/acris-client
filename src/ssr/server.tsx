import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { renderToStringWithData } from '@apollo/react-ssr';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { App } from '../App';

global.fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('build/public'));

const Html = ({
    content,
    state,
}: {
    content: string;
    state: NormalizedCacheObject;
}) => (
    <html>
        <body>
            <div id='root' dangerouslySetInnerHTML={{ __html: content }} />
            <script
                dangerouslySetInnerHTML={{
                    __html: `window.__APOLLO_STATE__=${JSON.stringify(
                        state
                    ).replace(/</g, '\\u003c')};`,
                }}
                src={'main.client_bundle.js'}
            />
        </body>
    </html>
);
app.use((req, res) => {
    const client = new ApolloClient({
        ssrMode: true,
        link: createHttpLink({
            uri: 'http://localhost:4000/graphql',
            credentials: 'same-origin',
            headers: {
                cookie: req.header('Cookie'),
            },
        }),
        cache: new InMemoryCache(),
    });

    const context = {};

    const WrappedApp = (
        <ApolloProvider client={client}>
            <StaticRouter location={req.url} context={context}>
                <App />
            </StaticRouter>
        </ApolloProvider>
    );

    renderToStringWithData(WrappedApp).then((content) => {
        const initialState = client.extract();
        const html = <Html content={content} state={initialState} />;

        res.status(200)
            .send(
                `<!doctype html>\n${ReactDOMServer.renderToStaticMarkup(html)}`
            )
            .end();
    });
});

app.listen(PORT, () => {
    console.log(`Started app on port ${PORT}`);
});
