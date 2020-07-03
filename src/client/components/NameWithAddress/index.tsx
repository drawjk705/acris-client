import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import { uppercaseFirstLetters } from '../../utils/uppercaseFirstLetters';
import { TitleAndContent } from '../TitleAndContent';

interface INameWithAddress {
    className?: string;
    name?: string | null;
    addressLineOne?: string | null;
    addressLineTwo?: string | null;
    city?: string | null;
    state?: string | null;
    zipCode?: string | null;
}
export const NameWithAddress: React.FC<INameWithAddress> = ({
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

    const nameSection = useMemo(
        () =>
            name ? (
                <Name>
                    {name ? uppercaseFirstLetters(name) : 'No name listed'}
                </Name>
            ) : (
                <NoContentSection>No name listed</NoContentSection>
            ),
        [name]
    );

    const addressSection = useMemo(
        () =>
            hasAddressProps ? (
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
                        }${state ? state + ' ' : ''}${zipCode ? zipCode : ''}`}
                    />
                </Address>
            ) : (
                <NoContentSection>No address information</NoContentSection>
            ),
        [
            className,
            addressLineOne,
            addressLineTwo,
            city,
            state,
            zipCode,
            hasAddressProps,
        ]
    );

    return (
        <NameWithAddressWrapper className={className}>
            <StyledTitleAndContent title={'Name'} content={nameSection} />
            <StyledTitleAndContent title={'Address'} content={addressSection} />
        </NameWithAddressWrapper>
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

const NameWithAddressWrapper = styled.div({
    display: 'flex',
    flexDirection: 'column',
});

const Name = styled.div({});

const Address = styled.div({});

const NoContentSection = styled.div({
    fontStyle: 'italic',
});

const AddressLineWrapper = styled.div({});

const StyledTitleAndContent = styled(TitleAndContent)({
    [`${TitleAndContent.TitleSection}`]: {
        width: '60px',
        minWidth: '60px',
    },
    [`${TitleAndContent.Content}`]: {
        paddingLeft: '10px',
    },
});
