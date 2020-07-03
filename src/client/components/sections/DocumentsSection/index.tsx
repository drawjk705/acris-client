import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import { IClassName } from '../../../constants/classNameable';
import { Property_property_documents } from '../../../__generated__/Property';
import { Card } from '../../Card/Card';
import { Document } from './Document';

interface IDocumentsSection extends IClassName {
    documents: Property_property_documents[];
}

export const DocumentsSection: React.FC<IDocumentsSection> = ({
    className,
    documents,
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
        <DocumentSectionWrapper className={className}>
            {sortedDocuments.map(
                (document) =>
                    document && (
                        <StyledCard key={document.id}>
                            <Document key={document.id} document={document} />
                        </StyledCard>
                    )
            )}
        </DocumentSectionWrapper>
    );
};

const DocumentSectionWrapper = styled.div({
    display: 'flex',
    flexDirection: 'column',
});

const StyledCard = styled(Card)({
    marginTop: '20px',
    marginBottom: '20px',
});
