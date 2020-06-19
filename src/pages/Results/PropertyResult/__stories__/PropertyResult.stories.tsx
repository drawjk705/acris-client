import React from 'react';
import { PropertyResult } from '../PropertyResult';
import { Property_property } from '../../../../__generated__/Property';
import { Borough } from '../../../../__generated__/globalTypes';

export default { title: 'Property Result' };

const defaultProps: Property_property = {
    __typename: 'Property',
    streetNumber: '123',
    streetName: 'Sesame Street',
    borough: Borough.MANHATTAN,
    block: 456,
    lot: 78,
    bble: '0001004560078',
    document: {
        __typename: 'Document',
        amount: '12341',
        crfn: '123123',
        date: '12/12/2020',
        id: '123123',
        type: 'type',
        parties: [],
    },
    housingMaintenanceCodeViolations: [],
    propertyType: {
        __typename: 'PropertyType',
        propertyType: 'type',
        description: 'description',
        recordType: 'vinyl',
    },
    taxClassData: [],
    valuationAndAssessmentData: [],
    registrationId: 123,
    unit: '2',
};

export const propertyResultPreview = () => <PropertyResult {...defaultProps} />;
