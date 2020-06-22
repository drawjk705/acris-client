import React from 'react';
import { Parties } from '../Parties';
import { mockParties } from '../../../__mocks__/mockParties';

export default { title: 'Results/Document Card' };

const defaultProps = {
    parties: mockParties,
    partyTypes: {
        partyOneType: 'Group one',
        partyTwoType: 'Group two',
        partyThreeType: null,
    },
};

export const allParties = () => <Parties {...defaultProps} />;
