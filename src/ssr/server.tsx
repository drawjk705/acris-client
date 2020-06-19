import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { ApolloProvider } from '@apollo/react-hooks';
import { renderToStringWithData } from '@apollo/react-ssr';
import { App } from '../App';
import { withHtml } from './withHtml';
import { getApolloClient } from './getApolloClient';
import { HttpLink } from 'apollo-boost';

global.fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('build/public'));

app.use((req, res) => {
    const link = new HttpLink({
        uri: 'http://localhost:4000/graphql',
        credentials: 'same-origin',
        headers: { cookie: req.header('Cookie') },
    });

    const client = getApolloClient([link]);

    const context = {};

    const WrappedApp = (
        <ApolloProvider client={client}>
            <StaticRouter location={req.url} context={context}>
                <App />
            </StaticRouter>
        </ApolloProvider>
    );

    renderToStringWithData(WrappedApp)
        .then((content) => {
            const initialState = client.extract();
            const html = withHtml({ content, state: initialState });

            res.status(200)
                .send(
                    `<!doctype html>\n${ReactDOMServer.renderToStaticMarkup(
                        html
                    )}`
                )
                .end();
        })
        .catch((e) => {
            console.log(e);
            console.log('Could not perform render to string with data');
        });
});

app.listen(PORT, () => {
    console.log(`Started app on port ${PORT}`);
});
