import { PropertyPreview_property } from '../__generated__/PropertyPreview';

export const mockPropertyPreview: PropertyPreview_property = {
    bble: '1012320036',
    borough: 'MANHATTAN',
    block: 1232,
    lot: 36,
    streetNumber: '200',
    streetName: 'WEST 85TH STREET',
    propertyType: {
        description: 'APARTMENT BUILDING',
    },
    documents: [
        {
            legalDateRecorded: '2004-11-01T05:00:00.000Z',
            id: '2004072201776001',
            type: {
                classCodeDescription: 'DEEDS AND OTHER CONVEYANCES',
            },
        },
        {
            legalDateRecorded: '2017-07-11T04:00:00.000Z',
            id: '2017070600607001',
            type: {
                classCodeDescription: 'MORTGAGES & INSTRUMENTS',
            },
        },
    ],
} as PropertyPreview_property;
