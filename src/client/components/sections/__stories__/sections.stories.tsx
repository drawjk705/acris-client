import React from 'react';
import { PartiesSection } from '../PartiesSection';
import { mockDocuments } from '../../../__mocks__/mockDocuments';
import {
    Property_property_documents_parties,
    Property_property_propertyType,
} from '../../../__generated__/Property';
import {
    AddressAndTypeSection,
    IAddressAndTypeSection,
} from '../AddressAndTypeSection';
import { mockProperty } from '../../../__mocks__/mockProperty';
import { BoroughBlockLotSection } from '../BoroughBlockLotSection';
import { DocumentSection } from '../DocumentSection';

export default { title: 'Components/Sections' };

const addressAndTypeProps: IAddressAndTypeSection = {
    streetName: mockProperty.streetName as string,
    streetNumber: mockProperty.streetNumber as string,
    unit: mockProperty.unit as string,
    propertyType: mockProperty.propertyType as Property_property_propertyType,
};

export const addressAndTypeSection = () => (
    <AddressAndTypeSection {...addressAndTypeProps} />
);

export const boroughBlockLotSection = () => (
    <BoroughBlockLotSection {...mockProperty} />
);

export const documentSection = () => (
    <DocumentSection document={mockDocuments[0]} />
);

const partiesProps = {
    parties: mockDocuments[0].parties as Property_property_documents_parties[],
    partyTypes: {
        partyOneType: mockDocuments[0].type.partyOneType as string,
        partyTwoType: mockDocuments[0].type.partyTwoType as string,
        partyThreeType: mockDocuments[0].type.partyThreeType as string,
    },
};

export const partiesSection = () => <PartiesSection {...partiesProps} />;
