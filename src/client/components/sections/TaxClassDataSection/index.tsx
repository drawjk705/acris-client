import React from 'react';
import styled from '@emotion/styled';
import {
    Property_property_taxClassData,
    Property_property_taxClassData_dimensions,
    Property_property_taxClassData_assessmentAndExemptionValuations,
} from '../../../__generated__/Property';
import { CollapsibleItem } from '../../CollapsibleItem/CollapsibleItem';
import {
    OptionallyRenderedTitleAndContentSection,
    TitleAndContent,
} from '../../TitleAndContent';
import { FONT } from '../../../styles/fonts';
import { COLORS } from '../../../styles/colors';
import { DimensionsChart } from './DimensionsChart';
import { AssessmentAndExemptionValuationsChart } from './AssessmentAndExemptionValuationsChart';
import { IClassName } from '../../../constants/classNameable';

interface ITaxClassDataSection extends IClassName {
    taxClassData: Property_property_taxClassData[];
}

export const TaxClassDataSection: React.FC<ITaxClassDataSection> = ({
    className,
    taxClassData,
}) => {
    const sortedTaxClassData = taxClassData.sort((dataA, dataB) =>
        Number(dataA.year) > Number(dataB.year) ? -1 : 1
    );

    return (
        <TaxClassDataSectionWrapper className={className}>
            {sortedTaxClassData.map((taxClassDataForYear, i) => (
                <TaxClassDataForYear key={i} {...taxClassDataForYear} />
            ))}
        </TaxClassDataSectionWrapper>
    );
};

interface ITaxClassDataForYear extends Property_property_taxClassData {}

const TaxClassDataForYear: React.FC<ITaxClassDataForYear> = ({
    year,
    dimensions,
    assessmentAndExemptionValuations,
    buildingConstructionYear,
    coopIdNumber,
    coopApartmentCount,
    storyCount,
    unitCount,
    zoningCode,
}) => {
    const sectionTitle = (
        <DropdownHeader
            style={{ fontSize: '20px' }}
        >{`${year}`}</DropdownHeader>
    );

    const buildingDimensionsTitle = (
        <DropdownHeader>Building Dimensions (feet/square feet)</DropdownHeader>
    );

    const valuationsTitle = (
        <DropdownHeader>Assessment and Exemption Valuations</DropdownHeader>
    );

    return (
        <TaxClassDataForYearItem>
            <StyledCollapsibleItem title={sectionTitle}>
                <DimensionsCollapsibleItem title={buildingDimensionsTitle}>
                    <DimensionsChart
                        {...(dimensions as Property_property_taxClassData_dimensions)}
                    />
                </DimensionsCollapsibleItem>
                <StyledCollapsibleItem title={valuationsTitle}>
                    <AssessmentAndExemptionValuationsChart
                        valuations={
                            assessmentAndExemptionValuations as Property_property_taxClassData_assessmentAndExemptionValuations
                        }
                    />
                </StyledCollapsibleItem>
                <StyledOptionallyRenderedTitleAndContentSection
                    title={'Building Construction Year'}
                    content={buildingConstructionYear}
                />
                <StyledOptionallyRenderedTitleAndContentSection
                    title={'Co-op ID'}
                    content={coopIdNumber}
                />
                <StyledOptionallyRenderedTitleAndContentSection
                    title={'Co-op Apartment Count'}
                    content={coopApartmentCount}
                />
                <StyledOptionallyRenderedTitleAndContentSection
                    title={'Story Count'}
                    content={storyCount}
                />
                <StyledOptionallyRenderedTitleAndContentSection
                    title={'Unit Count'}
                    content={unitCount}
                />
                <StyledOptionallyRenderedTitleAndContentSection
                    title={'Zoning Code'}
                    content={zoningCode}
                />
            </StyledCollapsibleItem>
        </TaxClassDataForYearItem>
    );
};

const TaxClassDataSectionWrapper = styled.div({
    display: 'flex',
    flexDirection: 'column',
});

const TaxClassDataForYearItem = styled.div({
    borderBottom: `1px solid ${COLORS.grey}`,
    marginBottom: '20px',
});

const DropdownHeader = styled.span({
    font: FONT.RobotoBold,
});

const StyledOptionallyRenderedTitleAndContentSection = styled(
    OptionallyRenderedTitleAndContentSection
)({
    [`${TitleAndContent.TitleSection}`]: {
        width: '200px',
    },
});

const StyledCollapsibleItem = styled(CollapsibleItem)({
    [`>${CollapsibleItem.Content}`]: {
        marginTop: '10px',
        marginLeft: '20px',
        marginRight: '20px',
        marginBottom: '20px',

        '>*': { marginBottom: '5px' },
    },
});

const DimensionsCollapsibleItem = styled(CollapsibleItem)({
    [`>${CollapsibleItem.Content}`]: {
        marginTop: '10px',
        marginLeft: '20px',
        marginBottom: '20px',
        width: '30%',

        '>*': { marginBottom: '5px' },
    },
});
