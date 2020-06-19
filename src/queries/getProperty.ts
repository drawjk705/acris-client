import gql from 'graphql-tag';
import { propertyFragment } from './fragments';
import { BoroughBlockLotInput } from '../__generated__/globalTypes';

export const GET_PROPERTY = gql`
    query Property(
        $streetNumber: String
        $streetName: String
        $boroughBlockLotInput: BoroughBlockLotInput
    ) {
        property(
            streetNumber: $streetNumber
            streetName: $streetName
            boroughBlockLot: $boroughBlockLotInput
        ) {
            ...propertyFragment
        }
    }
    ${propertyFragment}
`;
