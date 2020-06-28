import React from 'react';
import styled from '@emotion/styled';
import {
    TitleAndContent,
    OptionallyRenderedTitleAndContentSection,
} from '../../TitleAndContent';
import {
    Property_property_documents,
    Property_property_documents_parties,
    Property_property_documents_type,
} from '../../../__generated__/Property';
import { uppercaseFirstLetters } from '../../../utils/uppercaseFirstLetters';
import { FONT } from '../../../styles/fonts';
import { PartiesSection } from '../PartiesSection';

interface IDocumentSection {
    document: Property_property_documents | null;
}

const formatDate = (date: string) =>
    Intl.DateTimeFormat('en-US').format(new Date(date));

export const DocumentSection: React.FC<IDocumentSection> = ({ document }) => {
    const idWithLink = (
        <a
            href={`https://a836-acris.nyc.gov/DS/DocumentSearch/DocumentImageView?doc_id=${document?.id}`}
            target='_blank'
        >
            {document?.id}
        </a>
    );

    return (
        <DocumentSectionWrapper>
            <DocumentSectionTitleWrapper>
                {'Document: '}
                {uppercaseFirstLetters(document?.type.classCodeDescription)}
            </DocumentSectionTitleWrapper>
            <TitleAndContent title={'ID'} content={idWithLink} />
            <OptionallyRenderedTitleAndContentSection
                title={'Amount'}
                content={document?.amount}
                transformContent={(amount: string) => `$${amount}`}
            />
            <TitleAndContent
                title={'Legal Date Recorded'}
                content={document?.legalDateRecorded}
                transformContent={formatDate}
            />
            <OptionallyRenderedTitleAndContentSection
                title={'Good through date'}
                content={document?.goodThroughDate}
                transformContent={formatDate}
            />
            <OptionallyRenderedTitleAndContentSection
                title={'Last modified'}
                content={document?.dateModified}
                transformContent={formatDate}
            />
            {document?.parties && document?.type && (
                <StyledPartiesSection
                    parties={
                        document.parties as Property_property_documents_parties[]
                    }
                    partyTypes={
                        document.type as Property_property_documents_type
                    }
                />
            )}
        </DocumentSectionWrapper>
    );
};

const DocumentSectionWrapper = styled.div({
    display: 'flex',
    flexDirection: 'column',
});

const DocumentSectionTitleWrapper = styled.div({
    display: 'flex',
    flexDirection: 'row',
    font: FONT.RobotoBold,
    fontSize: '20px',
    marginBottom: '10px',
});

const StyledPartiesSection = styled(PartiesSection)({
    marginTop: '10px',
});
