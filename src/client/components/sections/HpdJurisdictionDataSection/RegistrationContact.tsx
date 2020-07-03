import React from 'react';
import styled from '@emotion/styled';
import { Property_property_hpdJurisdictionData_registrationContacts } from '../../../__generated__/Property';
import { IClassName } from '../../../constants/classNameable';
import { NameWithAddress } from '../../NameWithAddress';
import { TitleAndContent } from '../../TitleAndContent';

interface IRegistrationContact
    extends Property_property_hpdJurisdictionData_registrationContacts,
        IClassName {}

export const RegistrationContact: React.FC<IRegistrationContact> = ({
    className,
    title,
    firstName,
    middleInitial,
    lastName,
    corporationName,
    businessAddress,
}) => {
    const contactName = corporationName
        ? corporationName
        : [firstName, middleInitial, lastName].filter((str) => !!str).join(' ');

    return (
        <RegistrationContactWrapper className={className}>
            <NameWithAddress name={contactName} {...businessAddress} />
        </RegistrationContactWrapper>
    );
};

const RegistrationContactWrapper = styled.div({});
