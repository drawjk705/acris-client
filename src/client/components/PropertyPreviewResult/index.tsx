import React from 'react';
import { PropertyPreview_property } from '../../__generated__/PropertyPreview';
import { Card } from '../Card/Card';
import ChevronRight from '../../assets/chevron-right.svg';
import styled from '@emotion/styled';

export const PropertyPreviewResult: React.FC<PropertyPreview_property> = ({
    bble,
    borough,
    block,
    lot,
    streetNumber,
    streetName,
    document,
}) => (
    <Card>
        <PropertyAddress>{}</PropertyAddress>
        <StyledChevronRight />
    </Card>
);

const PropertyAddress = styled.div({});

const StyledChevronRight = styled(ChevronRight)({
    ':hover': {
        cursor: 'pointer',
    },
});
