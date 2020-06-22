import React from 'react';
import { DocumentCard } from '../DocumentCard';
import { mockDocument } from '../../../__mocks__/mockDocument';
import { Property_property_document } from '../../../__generated__/Property';

export default { title: 'Results/Document Card' };

const defaultProps: Property_property_document = mockDocument;

export const standardView = () => <DocumentCard {...defaultProps} />;
