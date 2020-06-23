import { mockParties } from './mockParties';
import { Property_property_document } from '../__generated__/Property';

export const mockDocument: Property_property_document = {
    amount: '0',
    crfn: '2017000254379',
    date: '2017-06-29T04:00:00.000Z',
    id: '2017070600607001',
    parties: mockParties,
    type: {
        typeId: 'SAT',
        documentType: 'SATISFACTION OF MORTGAGE',
        classCodeDescription: 'MORTGAGES & INSTRUMENTS',
        partyOneType: 'MORTGAGER/BORROWER',
        partyTwoType: 'MORTGAGEE/LENDER',
        partyThreeType: null,
    },
};
