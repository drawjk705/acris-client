import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import { uppercaseFirstLetters } from '../../../../utils/uppercaseFirstLetters';
import { TitleAndContent } from '../../../TitleAndContent';

interface IPartySection {
    className?: string;
    name?: string | null;
    addressLineOne?: string | null;
    addressLineTwo?: string | null;
    city?: string | null;
    state?: string | null;
    zipCode?: string | null;
}
export const PartySection: React.FC<IPartySection> = ({
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
                <Name className={className}>{uppercaseFirstLetters(name)}</Name>
            ) : (
                <NoContentSection>No name listed</NoContentSection>
            ),
        [className, name]
    );

    const addressSection = useMemo(
        () =>
            hasAddressProps ? (
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
                <NoContentSection className={className}>
                    No address information
                </NoContentSection>
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

    const noAddressSection = useMemo(
        () => (
            <NoContentSection className={className}>
                No address information
            </NoContentSection>
        ),
        [className]
    );

    return (
        <PartyWrapper className={className}>
            <StyledTitleAndContent title={'Name'} content={nameSection} />
            <StyledTitleAndContent title={'Address'} content={addressSection} />
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

const NoContentSection = styled.div({
    fontStyle: 'italic',
});

const AddressLineWrapper = styled.div({});

const StyledTitleAndContent = styled(TitleAndContent)({
    [`${TitleAndContent.TitleSection}`]: {
        width: '60px',
    },
});
