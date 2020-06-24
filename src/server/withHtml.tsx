import React from 'react';
import { NormalizedCacheObject } from 'apollo-boost';

export const withHtml = ({
    content,
    state,
}: {
    content: string;
    state: NormalizedCacheObject;
}) => (
    <html>
        <head>
            <link
                href='https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap'
                rel='stylesheet'
            />
        </head>
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
