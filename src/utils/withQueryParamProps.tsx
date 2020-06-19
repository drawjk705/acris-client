import React from 'react';
import { useLocation } from 'react-router';

export const withQueryParamProps = (Component: React.FC<any>) => (
    props: any
) => {
    const queryParams: { [key: string]: string | number } = {};

    new URLSearchParams(useLocation().search).forEach((value, key) => {
        queryParams[key] = value;
    });

    return <Component {...props} {...queryParams} />;
};
