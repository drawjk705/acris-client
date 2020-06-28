import React from 'react';
import { PropertyResult } from '..';
import { mockProperty } from '../../../__mocks__/mockProperty';

export default { title: 'Components/Property Result' };

const defaultProps = mockProperty;

export const withAddress = () => <PropertyResult {...defaultProps} />;

export const withoutAddress = () => (
    <PropertyResult {...defaultProps} streetName={null} streetNumber={null} />
);
