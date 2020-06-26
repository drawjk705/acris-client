import React from 'react';
import {
    Property_property,
    Property_property_document,
} from '../../__generated__/Property';
import styled from '@emotion/styled';
import { DocumentCard } from '../DocumentCard/DocumentCard';
import { PropertyPreview_property } from '../../__generated__/PropertyPreview';

export const PropertyCard: React.FC<PropertyPreview_property> = (property) => (
    <PropertyWrapper>
        <PropertyAddress>{`${property.streetNumber} ${property.streetName}`}</PropertyAddress>
        <BoroughBlockLotInfo>
            <li>{`BBLE: ${property.bble}`}</li>
            <li>{`Borough: ${property.borough}`}</li>
            <li>{`Block: ${property.block}`}</li>
            <li>{`Lot: ${property.lot}`}</li>
        </BoroughBlockLotInfo>
        <DocumentCard {...(property.document as Property_property_document)} />
    </PropertyWrapper>
);

const PropertyWrapper = styled.div`
    border: 1px;
    border-color: grey;
    border-style: solid;
`;

const PropertyAddress = styled.h1``;

const BoroughBlockLotInfo = styled.ul``;

const Document = styled.div``;
