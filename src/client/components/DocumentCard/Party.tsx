import React from 'react';
import styled from '@emotion/styled';
import { Property_property_document_parties } from '../../__generated__/Property';
import { uppercaseFirstLetters } from '../../utils/uppercaseFirstLetters';

export const Party: React.FC<Property_property_document_parties> = ({
    name,
    address,
}) => {
    const { addressLineOne, addressLineTwo, city, state, zipCode } =
        address || {};

    return (
        <PartyWrapper>
            <Name>{uppercaseFirstLetters(name)}</Name>
            {address && (
                <Address>
                    <AddressLine
                        addressLine={uppercaseFirstLetters(addressLineOne)}
                    />
                    <AddressLine
                        addressLine={uppercaseFirstLetters(addressLineTwo)}
                    />
                    <AddressLine
                        addressLine={`${
                            city ? uppercaseFirstLetters(city) + ', ' : ''
                        }${state ? state + ' ' : ''}${zipCode}`}
                    />
                </Address>
            )}
        </PartyWrapper>
    );
};

interface IAddressLine {
    addressLine?: string | null;
    city?: string | null;
    state?: string | null;
    zipCode?: string | null;
}
const AddressLine: React.FC<IAddressLine> = ({ addressLine }) =>
    addressLine ? <AddressLineWrapper>{addressLine}</AddressLineWrapper> : null;

const PartyWrapper = styled.div({
    display: 'flex',
    flexDirection: 'column',
});

const Name = styled.div({});

const Address = styled.div({});
const AddressLineWrapper = styled.div({});
