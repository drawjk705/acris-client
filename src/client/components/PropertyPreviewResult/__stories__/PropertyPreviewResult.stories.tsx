import React from 'react';
import { PropertyPreviewResult } from '..';
import { mockPropertyPreview } from '../../../__mocks__/mockPropertyPreview';
import { PropertyPreview_property } from '../../../__generated__/PropertyPreview';

export default { title: 'Components/PropertyPreviewResult' };

const defaultProps: PropertyPreview_property = mockPropertyPreview;

export const withAddress = () => <PropertyPreviewResult {...defaultProps} />;

export const withoutAddress = () => (
    <PropertyPreviewResult
        {...defaultProps}
        streetNumber={null}
        streetName={null}
    />
);
