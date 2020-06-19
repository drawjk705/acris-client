import React from 'react';
import styled from '@emotion/styled';
import { Property_property } from '../../../__generated__/Property';

export const PropertyResult: React.FC<Property_property> = (property) => (
    <PropertyWrapper>
        <PropertyAddress>{`${property.streetNumber} ${property.streetName}`}</PropertyAddress>
        <BoroughBlockLotInfo>
            <li>{`BBLE: ${property.bble}`}</li>
            <li>{`Borough: ${property.borough}`}</li>
            <li>{`Block: ${property.block}`}</li>
            <li>{`Lot: ${property.lot}`}</li>
        </BoroughBlockLotInfo>
        <Document>
            Document
            <ul>
                <li>{`Amount: ${property.document?.amount}`}</li>
                <li>{`CRFN: ${property.document?.crfn}`}</li>
                <li>{`Date: ${property.document?.date}`}</li>
                <li>{`Type: ${property.document?.type}`}</li>
            </ul>
        </Document>
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
