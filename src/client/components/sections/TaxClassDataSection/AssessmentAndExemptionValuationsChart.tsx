import React from 'react';
import styled from '@emotion/styled';
import { Property_property_taxClassData_assessmentAndExemptionValuations } from '../../../__generated__/Property';
import { ValuationTypes } from './constants';
import { FONT } from '../../../styles/fonts';
import { COLORS } from '../../../styles/colors';
import { TitleAndContent } from '../../TitleAndContent';
import { formatDollarAmount } from '../../../utils/formatDollarAmount';
import { isNullOrUndefined } from '../../../utils/isNullOrUndefined';

type TValuationData = {
    assessment: {
        landValue: string | null;
        totalValue: string | null;
    } | null;
    exemption: {
        landValue: string | null;
        totalValue: string | null;
    } | null;
};

type TValuationEntry = [
    keyof Property_property_taxClassData_assessmentAndExemptionValuations,
    TValuationData
];

interface IAssessmentAndExemptionValuationsChart {
    valuations: Property_property_taxClassData_assessmentAndExemptionValuations;
}

const notListed = <span style={{ fontStyle: 'italic' }}>not listed</span>;

export const AssessmentAndExemptionValuationsChart: React.FC<IAssessmentAndExemptionValuationsChart> = ({
    valuations,
}) => (
    <AssessmentAndExemptionValuationsChartWrapper>
        <LandAndTotalValueHeaders>
            <LandOrTotalValueHeader>Land Value</LandOrTotalValueHeader>
            <LandOrTotalValueHeader>Total Value</LandOrTotalValueHeader>
        </LandAndTotalValueHeaders>
        {(Object.entries(valuations) as TValuationEntry[]).map(
            ([valuationType, valuationData]) => {
                const assessmentLandValue =
                    valuationData?.assessment?.landValue;
                const assessmentTotalValue =
                    valuationData?.assessment?.totalValue;
                const exemptionLandValue = valuationData?.exemption?.landValue;
                const exemptionTotalValue =
                    valuationData?.exemption?.totalValue;

                return (
                    <ValuationTypeSection key={valuationType}>
                        <ValuationType>
                            {ValuationTypes[valuationType]}
                        </ValuationType>
                        <AssessmentOrExemptionRow>
                            <StyledTitleAndContent
                                title={'Assessment'}
                                content={
                                    <LandAndTotalValue
                                        landValue={assessmentLandValue}
                                        totalValue={assessmentTotalValue}
                                    />
                                }
                            />
                        </AssessmentOrExemptionRow>
                        <AssessmentOrExemptionRow>
                            <StyledTitleAndContent
                                title={'Exemption'}
                                content={
                                    <LandAndTotalValue
                                        landValue={exemptionLandValue}
                                        totalValue={exemptionTotalValue}
                                    />
                                }
                            />
                        </AssessmentOrExemptionRow>
                    </ValuationTypeSection>
                );
            }
        )}
    </AssessmentAndExemptionValuationsChartWrapper>
);

const LandAndTotalValue = ({
    landValue,
    totalValue,
}: {
    landValue: string | null | undefined;
    totalValue: string | null | undefined;
}) => (
    <LandAndTotalValueWrapper>
        <Value value={landValue} />
        <Value value={totalValue} />
    </LandAndTotalValueWrapper>
);

const Value = ({ value }: { value: string | null | undefined }) => (
    <LandOrTotalValue>
        {isNullOrUndefined(value)
            ? notListed
            : formatDollarAmount(value as string)}
    </LandOrTotalValue>
);

const AssessmentAndExemptionValuationsChartWrapper = styled.div({
    display: 'flex',
    flexDirection: 'column',
    width: '45%',
    minWidth: '375px',
});

const ValuationTypeSection = styled.div({
    display: 'flex',
    flexDirection: 'column',
});

const LandAndTotalValueHeaders = styled.div({
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '97.25px',
    borderBottom: `1px solid ${COLORS.grey}`,
});

const LandOrTotalValueHeader = styled.div({
    width: '100%',
    textAlign: 'right',
    font: FONT.RobotoBold,
});

const ValuationType = styled.div({
    font: FONT.RobotoBold,
});

const AssessmentOrExemptionRow = styled.div({
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '10px',
});

const LandAndTotalValueWrapper = styled.div({
    display: 'flex',
    flexDirection: 'row',
});

const StyledTitleAndContent = styled(TitleAndContent)({
    width: '100%',

    [`>${TitleAndContent.TitleSection}`]: {
        minWidth: '88px',
    },

    [`>${TitleAndContent.Content}`]: {
        width: '100%',
    },
});

const LandOrTotalValue = styled.div({
    width: '100%',
    textAlign: 'right',
});
