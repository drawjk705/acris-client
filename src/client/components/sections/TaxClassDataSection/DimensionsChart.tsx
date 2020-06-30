import React from 'react';
import styled from '@emotion/styled';
import { Property_property_taxClassData_dimensions } from '../../../__generated__/Property';
import {
    OptionallyRenderedTitleAndContentSection,
    TitleAndContent,
} from '../../TitleAndContent';
import { COLORS } from '../../../styles/colors';

export const DimensionsChart: React.FC<Property_property_taxClassData_dimensions> = ({
    buildingDepthFeet,
    buildingFrontageFeet,
    factoryAreaGrossSquarefootage,
    garageAreaGrossSquarefootage,
    grossSquarefootage,
    hotelAreaGrossSquarefootage,
    loftAreaGrossSquarefootage,
    lotDepthFeet,
    lotFrontageFeet,
    officeAreaGrossSquarefootage,
    otherAreaGrossSquarefootage,
    residentialAreaGrossSquarefootage,
    retailAreaGrossSquarefootage,
    storageAreaGrossSquarefootage,
    totalLandAreaFeet,
    warehouseAreaGrossSquarefootage,
}) => (
    <>
        <StyledOptionallyRenderedTitleAndContentSection
            title={'Building depth'}
            content={buildingDepthFeet}
        />
        <StyledOptionallyRenderedTitleAndContentSection
            title={'Building frontage'}
            content={buildingFrontageFeet}
        />
        <StyledOptionallyRenderedTitleAndContentSection
            title={'Lot depth'}
            content={lotDepthFeet}
        />
        <StyledOptionallyRenderedTitleAndContentSection
            title={'Lot frontage'}
            content={lotFrontageFeet}
        />
        <StyledOptionallyRenderedTitleAndContentSection
            title={'Factory area gross'}
            content={factoryAreaGrossSquarefootage}
        />
        <StyledOptionallyRenderedTitleAndContentSection
            title={'Garage area gross'}
            content={garageAreaGrossSquarefootage}
        />
        <StyledOptionallyRenderedTitleAndContentSection
            title={'Hotel area gross'}
            content={hotelAreaGrossSquarefootage}
        />
        <StyledOptionallyRenderedTitleAndContentSection
            title={'Loft area gross'}
            content={loftAreaGrossSquarefootage}
        />
        <StyledOptionallyRenderedTitleAndContentSection
            title={'Office area gross'}
            content={officeAreaGrossSquarefootage}
        />
        <StyledOptionallyRenderedTitleAndContentSection
            title={'Other area gross'}
            content={otherAreaGrossSquarefootage}
        />
        <StyledOptionallyRenderedTitleAndContentSection
            title={'Residential area gross'}
            content={residentialAreaGrossSquarefootage}
        />
        <StyledOptionallyRenderedTitleAndContentSection
            title={'Retail area gross'}
            content={retailAreaGrossSquarefootage}
        />
        <StyledOptionallyRenderedTitleAndContentSection
            title={'Storage area gross'}
            content={storageAreaGrossSquarefootage}
        />
        <StyledOptionallyRenderedTitleAndContentSection
            title={'Warehouse area gross'}
            content={warehouseAreaGrossSquarefootage}
        />
        <StyledOptionallyRenderedTitleAndContentSection
            title={'Total land area'}
            content={totalLandAreaFeet}
        />
        <SquarefootageGross
            title={'Squarefootage gross'}
            content={grossSquarefootage}
        />
    </>
);

const StyledOptionallyRenderedTitleAndContentSection = styled(
    OptionallyRenderedTitleAndContentSection
)({
    [`${TitleAndContent.TitleSection}`]: {
        width: '180px',
    },
    [`${TitleAndContent.Content}`]: {
        marginLeft: '20px',
        // marginRight: '20px',
        width: '100px',
        textAlign: 'right',
    },
    paddingTop: '5px',
    paddingBottom: '5px',
    marginBottom: '0px',
});

const SquarefootageGross = styled(
    StyledOptionallyRenderedTitleAndContentSection
)({
    borderTop: `1px solid ${COLORS.grey}`,
});
