import React from 'react';
import styled from '@emotion/styled';
import { uppercaseFirstLetters } from '../../utils/uppercaseFirstLetters';

interface IParty {
    className?: string;
    name?: string | null;
    addressLineOne?: string | null;
    addressLineTwo?: string | null;
    city?: string | null;
    state?: string | null;
    zipCode?: string | null;
}
export const Party: React.FC<IParty> = ({
    className,
    name,
    addressLineOne,
    addressLineTwo,
    city,
    state,
    zipCode,
}) => {
    const hasAddressProps = !!(
        addressLineOne ||
        addressLineTwo ||
        city ||
        state ||
        zipCode
    );

    return (
        <PartyWrapper className={className}>
            <Name className={className}>{uppercaseFirstLetters(name)}</Name>
            {hasAddressProps ? (
                <Address className={className}>
                    <AddressLine
                        addressLine={uppercaseFirstLetters(addressLineOne)}
                    />
                    <AddressLine
                        addressLine={uppercaseFirstLetters(addressLineTwo)}
                    />
                    <AddressLine
                        addressLine={`${
                            city ? uppercaseFirstLetters(city) + ', ' : ''
                        }${state ? state + ' ' : ''}${zipCode ? zipCode : ''}`}
                    />
                </Address>
            ) : (
                <NoAddressInformation className={className}>
                    No address information
                </NoAddressInformation>
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
const NoAddressInformation = styled.div({
    marginLeft: '10px',
    fontStyle: 'italic',
});
const AddressLineWrapper = styled.div({});
