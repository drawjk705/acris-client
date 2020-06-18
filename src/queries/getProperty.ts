import gql from 'graphql-tag';
import { propertyFragment } from './fragments';

export const GET_PROPERTY = {
    byAddress: gql`
        query propertyByAddress {
            property(streetNumber: "200", streetName: "west 85th street") {
                ...property
            }

            ${propertyFragment}
        }
    `,

    byBoroughBlockLot: gql`
        query propertyByBoroughBlockLot($borough: Borough! $block: Int! $lot: Int!) {
            property(
                boroughBlockLot: {
                    borough: $borough
                    block: $block
                    lot: $lot
                }
            ) {
                ...property
            }

            ${propertyFragment}
        }`,
};
