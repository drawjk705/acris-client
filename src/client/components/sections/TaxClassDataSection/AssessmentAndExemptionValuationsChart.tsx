import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Property_property_taxClassData_assessmentAndExemptionValuations } from '../../../__generated__/Property';
import { ValuationTypes } from './constants';
import { CollapsibleItem } from '../../CollapsibleItem/CollapsibleItem';
import { FONT } from '../../../styles/fonts';
import { COLORS } from '../../../styles/colors';
import { TitleAndContent } from '../../TitleAndContent';
import { formatDollarAmount } from '../../../utils/formatDollarAmount';

const isNullOrUndefined = (value: any) => value === null || value === undefined;

interface IAssessmentAndExemptionValuationsChart {
    valuations: Property_property_taxClassData_assessmentAndExemptionValuations;
}

const notListed = <span style={{ fontStyle: 'italic' }}>not listed</span>;

export const AssessmentAndExemptionValuationsChart: React.FC<IAssessmentAndExemptionValuationsChart> = ({
    valuations,
}) => {
    return (
        <AssessmentAndExemptionValuationsChartWrapper>
            <LandTotalHeaders>
                <Header>Land</Header>
                <Header>Total</Header>
            </LandTotalHeaders>
            {Object.entries(valuations).map(([key, val]) => {
                const sectionTitle = (
                    <Header>
                        {
                            ValuationTypes[
                                key as keyof Property_property_taxClassData_assessmentAndExemptionValuations
                            ]
                        }
                    </Header>
                );

                const assessmentLandValue = val?.assessment?.landValue;
                const assessmentTotalValue = val?.assessment?.totalValue;
                const exemptionLandValue = val?.exemption?.landValue;
                const exemptionTotalValue = val?.exemption?.totalValue;

                const assessmentSection = (
                    <AssessmentOrExemptionSection>
                        <LandOrTotalValueWrapper>
                            <Value value={assessmentLandValue} />
                            <Value value={assessmentTotalValue} />
                        </LandOrTotalValueWrapper>
                    </AssessmentOrExemptionSection>
                );

                const exemptionSection = (
                    <AssessmentOrExemptionSection>
                        <LandOrTotalValueWrapper>
                            <Value value={exemptionLandValue} />
                            <Value value={exemptionTotalValue} />
                        </LandOrTotalValueWrapper>
                    </AssessmentOrExemptionSection>
                );

                return (
                    <>
                        {sectionTitle}
                        <StyledTitleAndContent
                            title={'Assessment'}
                            content={assessmentSection}
                        />
                        <StyledTitleAndContent
                            title={'Exemption'}
                            content={exemptionSection}
                        />
                    </>
                );
            })}
        </AssessmentAndExemptionValuationsChartWrapper>
    );
};

const Value = ({ value }: { value: string | null }) => (
    <LandOrTotalValue>
        {isNullOrUndefined(value) ? notListed : formatDollarAmount(value)}
    </LandOrTotalValue>
);

const AssessmentAndExemptionValuationsChartWrapper = styled.div({
    display: 'flex',
    flexDirection: 'column',
    width: '45%',
});

const Header = styled.div({
    font: FONT.RobotoBold,
});

const AssessmentOrExemptionSection = styled.div({
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 'auto',
});

const LandOrTotalValueWrapper = styled.div({
    display: 'flex',
    flexDirection: 'row',
    width: '400px',
});

const LandOrTotalValue = styled.span({
    width: '100%',
    textAlign: 'right',
});

const LandTotalHeaders = styled.div({
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 'auto',
    width: '100%',
    borderBottom: `1px solid ${COLORS.grey}`,
    [`>${Header}`]: {
        textAlign: 'right',
        width: '100%',
    },
});

const StyledTitleAndContent = styled(TitleAndContent)({
    marginLeft: '20px',
    [`${TitleAndContent.TitleSection}`]: {
        width: '180px',
        marginRight: '0px',
    },
    [`${TitleAndContent.Content}`]: {
        width: '100%',
    },
});
