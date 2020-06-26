import React from 'react';
import { useLocation, useRouteMatch } from 'react-router';

export const withQueryParamProps = (path: string, Component: React.FC<any>) => (
    props: any
) => {
    const queryParams: { [key: string]: string | number } = {};

    const match = useRouteMatch({
        path,
        strict: true,
        sensitive: true,
    });

    new URLSearchParams(useLocation().search).forEach((value, key) => {
        queryParams[key] = value;
    });

    return <Component {...match?.params} {...props} {...queryParams} />;
};
