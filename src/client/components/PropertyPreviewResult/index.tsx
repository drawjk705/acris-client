import React, { useCallback, useMemo } from 'react';
import styled from '@emotion/styled';
import { PropertyPreview_property } from '../../__generated__/PropertyPreview';
import { Card } from '../Card/Card';
import ChevronRight from '../../assets/chevron-right.svg';
import { IClassName } from '../../constants/classNameable';
import { BoroughBlockLotSection } from '../sections/BoroughBlockLotSection';
import { AddressAndTypeSection } from '../sections/AddressAndTypeSection';
import { DocumentSection } from '../sections/DocumentSection';
import {
    Property_property_documents,
    Property_property_propertyType,
} from '../../__generated__/Property';
import { Link } from 'react-router-dom';

export const PropertyPreviewResult: React.FC<PropertyPreview_property &
    IClassName> = ({
    streetNumber,
    streetName,
    propertyType,
    documents,
    borough,
    block,
    lot,
    bble,
    className,
}) => {
    const hasAddress = !!streetNumber && !!streetName;

    const chevronLink = useMemo(() => {
        const queryString = hasAddress
            ? `streetNumber=${streetNumber}&streetName=${streetName}`
            : `borough=${borough}&block=${block}&lot=${lot}&documentId=${documents[0]?.id}`;

        return `/property?${queryString}`;
    }, [streetName, streetNumber, documents, hasAddress]);

    return (
        <StyledCard className={className}>
            <DataWrapper>
                {hasAddress ? (
                    <AddressAndTypeSection
                        streetName={streetName as string}
                        streetNumber={streetNumber as string}
                        propertyType={
                            propertyType as Property_property_propertyType
                        }
                    />
                ) : (
                    <DocumentSection
                        document={documents[0] as Property_property_documents}
                    />
                )}
                <BoroughBlockLotSection {...{ borough, block, lot, bble }} />
            </DataWrapper>
            <StyledLink to={chevronLink}>
                <StyledChevronRight />
            </StyledLink>
        </StyledCard>
    );
};

const StyledCard = styled(Card)({
    display: 'flex',
    flexDirection: 'row',
});

const DataWrapper = styled.div({
    display: 'flex',
    flexDirection: 'column',
});

const StyledChevronRight = styled(ChevronRight)({
    ':hover': {
        cursor: 'pointer',
    },
});

const StyledLink = styled(Link)({
    margin: 'auto',
    marginRight: '0px',
});
