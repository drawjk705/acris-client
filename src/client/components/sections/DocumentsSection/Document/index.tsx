import React from 'react';
import moment from 'moment';
import styled from '@emotion/styled';
import {
    TitleAndContent,
    OptionallyRenderedTitleAndContentSection,
} from '../../../TitleAndContent';
import {
    Property_property_documents,
    Property_property_documents_parties,
    Property_property_documents_type,
} from '../../../../__generated__/Property';
import { uppercaseFirstLetters } from '../../../../utils/uppercaseFirstLetters';
import { FONT } from '../../../../styles/fonts';
import { PartiesSection } from '../../PartiesSection';
import { Section } from '../../Section';

interface IDocument {
    document: Property_property_documents | null;
}

export const Document: React.FC<IDocument> = ({ document }) => {
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
                transformContent={(date: string) =>
                    moment(date).format('MM/DD/YYYY')
                }
            />
            <OptionallyRenderedTitleAndContentSection
                title={'Good through date'}
                content={document?.goodThroughDate}
                transformContent={(date: string) =>
                    moment(date).format('MM/DD/YYYY')
                }
            />
            <OptionallyRenderedTitleAndContentSection
                title={'Last modified'}
                content={document?.dateModified}
                transformContent={(date: string) =>
                    moment(date).format('MM/DD/YYYY')
                }
            />

            <StyledSection
                header={'Parties'}
                props={{
                    parties: document?.parties,
                    partyTypes: document?.type,
                }}
                propTest={document?.parties && document?.type}
                component={StyledPartiesSection}
            />
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

const StyledSection = styled(Section)({
    [`${Section.Header}`]: {
        fontSize: '18px',
        fontStyle: 'italic',
        paddingBottom: '0px',
    },
});

const StyledPartiesSection = styled(PartiesSection)({
    marginTop: '10px',
});
