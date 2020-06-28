import React, { useCallback } from 'react';
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

    const onCLickChevron = useCallback(() => {
        const queryString = hasAddress
            ? `streetNumber=${streetNumber}&streetName=${streetName}`
            : `borough=${borough}&block=${block}&lot=${lot}&documentId=${documents[0]?.id}`;

        window.location.assign(`/property?${queryString}`);
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
            <StyledChevronRight onClick={onCLickChevron} />
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
    margin: 'auto',
    marginRight: '0px',
});
