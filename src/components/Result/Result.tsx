import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { GET_PROPERTY } from '../../queries/getProperty';

export const Result: React.FC = () => {
    // const x = 1;

    // if (x < 3) {
    //     console.log('here');
    // }

    // throw new Error('oh no');
    const { loading, error, data } = useQuery(GET_PROPERTY.byAddress);

    // if (loading) {
    //     return <div>loading</div>;
    // }

    // if (error) {
    //     return <div>oops</div>;
    // }

    return <div>{JSON.stringify(data)}</div>;
};
