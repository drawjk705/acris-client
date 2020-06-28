import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import { Property_property } from '../../__generated__/Property';
import {
    AddressAndTypeSection,
    SectionTitleWrapper,
} from '../sections/AddressAndTypeSection';
import { BoroughBlockLotSection } from '../sections/BoroughBlockLotSection';
import { DocumentSection } from '../sections/DocumentSection';
import { FONT } from '../../styles/fonts';
import { COLORS } from '../../styles/colors';
import { Card } from '../Card/Card';

export const PropertyResult: React.FC<Property_property> = ({
    documents,
    ...props
}) => {
    const sortedDocuments = useMemo(
        () =>
            documents.sort((documentA, documentB) =>
                new Date(documentA?.legalDateRecorded) >
                new Date(documentB?.legalDateRecorded)
                    ? -1
                    : 1
            ),
        [documents]
    );

    return (
        <PropertyResultWrapper>
            <Section>
                <StyledAddressAndTypeSection {...props} />
                <BoroughBlockLotSection {...props} />
            </Section>
            <Section>
                <SectionHeader>Documents</SectionHeader>
                {sortedDocuments.map(
                    (document) =>
                        document && (
                            <StyledCard>
                                <DocumentSection
                                    key={document?.id}
                                    document={document}
                                />
                            </StyledCard>
                        )
                )}
            </Section>
        </PropertyResultWrapper>
    );
};

const PropertyResultWrapper = styled.div({});

const StyledAddressAndTypeSection = styled(AddressAndTypeSection)({
    [`${SectionTitleWrapper}`]: {
        fontSize: '30px',
    },
});

const Section = styled.div({
    marginBottom: '5px',
});

const SectionHeader = styled.div({
    marginTop: '5px',
    marginBottom: '5px',
    font: FONT.RobotoBold,
    fontSize: '25px',
    borderBottom: `1px solid ${COLORS.grey}`,
});

const StyledCard = styled(Card)({
    marginTop: '20px',
    marginBottom: '20px',
});
