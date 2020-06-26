import React from 'react';
import { mockProperty } from '../../../__mocks__/mockProperty';
import { PropertyPreviewResult } from '..';
import { Property_property } from '../../../__generated__/Property';

export default { title: 'Components/PropertyPreviewResult' };

const defaultProps: Property_property = mockProperty;

export const propertyPreviewResult = () => (
    <PropertyPreviewResult {...defaultProps} />
);
