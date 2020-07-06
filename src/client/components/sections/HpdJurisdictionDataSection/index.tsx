import React from 'react';
import styled from '@emotion/styled';
import {
    Property_property_hpdJurisdictionData,
    Property_property_hpdJurisdictionData_registrationContacts,
} from '../../../__generated__/Property';
import { OptionallyRenderedTitleAndContentSection } from '../../TitleAndContent';
import { RegistrationContact } from './RegistrationContact';
import { Section } from '../Section';

interface IHpdJurisdictionDataSection
    extends Property_property_hpdJurisdictionData {}

export const HpdJurisdictionDataSection: React.FC<IHpdJurisdictionDataSection> = ({
    registrationId,
    buildingId,
    communityBoardId,
    managementProgram,
    numberOfLegalStories,
    numberOfApartments,
    numberOfRooms,
    lifecycleStage,
    recordStatusId,
    recordStatus,
    registrationContacts,
}) => (
    <HpdJurisdictionDataSectionWrapper>
        <OptionallyRenderedTitleAndContentSection
            title={'Number of Legal Stories'}
            content={numberOfLegalStories}
        />
        <OptionallyRenderedTitleAndContentSection
            title={'Number of Apartments'}
            content={numberOfApartments}
        />
        <OptionallyRenderedTitleAndContentSection
            title={'Number of Rooms'}
            content={numberOfRooms}
        />
        <OptionallyRenderedTitleAndContentSection
            title={'HPD Registration ID'}
            content={registrationId}
        />
        <OptionallyRenderedTitleAndContentSection
            title={'HPD Building ID'}
            content={buildingId}
        />
        <OptionallyRenderedTitleAndContentSection
            title={'HPD Record Status'}
            content={recordStatus}
        />
        <OptionallyRenderedTitleAndContentSection
            title={'HPD Management Program'}
            content={managementProgram}
        />
        <OptionallyRenderedTitleAndContentSection
            title={'HPD Lifecycle Stage'}
            content={lifecycleStage}
        />
        <StyledSection
            header={'HPD Registration Contacts'}
            props={{ registrationContacts }}
            propTest={recordStatus}
            component={RegistrationContacts}
        />
    </HpdJurisdictionDataSectionWrapper>
);

interface IRegistrationContacts {
    registrationContacts: Property_property_hpdJurisdictionData_registrationContacts[];
}

const RegistrationContacts: React.FC<IRegistrationContacts> = ({
    registrationContacts,
}) => (
    <RegistrationContactsWrapper>
        {registrationContacts.map(
            (contact, i) =>
                contact && <StyledRegistrationContact key={i} {...contact} />
        )}
    </RegistrationContactsWrapper>
);

const HpdJurisdictionDataSectionWrapper = styled.div({
    display: 'flex',
    flexDirection: 'column',
});

const StyledSection = styled(Section)({
    [`${Section.Header}`]: {
        fontSize: '18px',
        paddingBottom: '0px',
        marginBottom: '10px',
    },
});

const RegistrationContactsWrapper = styled.div({
    marginLeft: '10px',
});

const StyledRegistrationContact = styled(RegistrationContact)({
    marginBottom: '5px',
});
