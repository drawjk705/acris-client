import React, { useMemo } from 'react';
import moment from 'moment';
import styled from '@emotion/styled';
import { Property_property_housingMaintenanceCodeViolations } from '../../../__generated__/Property';
import {
    TitleAndContent,
    OptionallyRenderedTitleAndContentSection,
} from '../../TitleAndContent';
import {
    ViolationCurrentStatus,
    ViolationStatus,
} from '../../../__generated__/globalTypes';
import {
    ViolationCurrentStatusStringified,
    ViolationStatusStringified,
} from './constants';
import { FONT } from '../../../styles/fonts';
import { COLORS } from '../../../styles/colors';
import { CollapsibleItem } from '../../CollapsibleItem/CollapsibleItem';

interface IHousingMaintenanceCodeViolationsSection {
    violations: Property_property_housingMaintenanceCodeViolations[];
}

export const HousingMaintenanceCodeViolationsSection: React.FC<IHousingMaintenanceCodeViolationsSection> = ({
    violations,
}) => {
    const sortedViolations = useMemo(
        () =>
            violations.sort((violationA, violationB) =>
                moment(violationA.novIssuedDate) >
                moment(violationB.novIssuedDate)
                    ? -1
                    : 1
            ),
        [violations]
    );

    return (
        <HousingMaintenanceCodeViolationsWrapper>
            {sortedViolations.map((violation, i) => (
                <HousingMaintenanceCodeViolation key={i} {...violation} />
            ))}
        </HousingMaintenanceCodeViolationsWrapper>
    );
};

const HousingMaintenanceCodeViolation: React.FC<Property_property_housingMaintenanceCodeViolations> = ({
    apartment,
    story,
    inspectionDate,
    originalCertifyByDate,
    originalCorrectByDate,
    newCertifyByDate,
    newCorrectByDate,
    novDescription,
    novIssuedDate,
    currentStatus,
    violationStatus,
}) => {
    const titleSection = (
        <TitleSection>
            <Violations>
                <StyledOptionallyRenderedTitleAndContentSection
                    title={'Notice of Violation Issued'}
                    content={novIssuedDate}
                    transformContent={(date: string) =>
                        moment(date).format('MM/DD/YYYY')
                    }
                />
                <StyledOptionallyRenderedTitleAndContentSection
                    title={'Violation Description'}
                    content={novDescription}
                />
            </Violations>
            <CurrentStatus isOpen={violationStatus === ViolationStatus.Open}>
                {ViolationStatusStringified[violationStatus as ViolationStatus]}
            </CurrentStatus>
        </TitleSection>
    );

    return (
        <HousingMaintenanceCodeViolationItem>
            <StyledCollapsibleItem title={titleSection}>
                <Violations>
                    <StyledOptionallyRenderedTitleAndContentSection
                        title={'Inspection Date'}
                        content={inspectionDate}
                        transformContent={(date: string) =>
                            moment(date).format('MM/DD/YYYY')
                        }
                    />
                    <StyledOptionallyRenderedTitleAndContentSection
                        title={'Original Certify By Date'}
                        content={originalCertifyByDate}
                        transformContent={(date: string) =>
                            moment(date).format('MM/DD/YYYY')
                        }
                    />
                    <StyledOptionallyRenderedTitleAndContentSection
                        title={'New Certify By Date'}
                        content={newCertifyByDate}
                        transformContent={(date: string) =>
                            moment(date).format('MM/DD/YYYY')
                        }
                    />
                    <StyledOptionallyRenderedTitleAndContentSection
                        title={'Original Correct By Date'}
                        content={originalCorrectByDate}
                        transformContent={(date: string) =>
                            moment(date).format('MM/DD/YYYY')
                        }
                    />
                    <StyledOptionallyRenderedTitleAndContentSection
                        title={'New Correct By Date'}
                        content={newCorrectByDate}
                        transformContent={(date: string) =>
                            moment(date).format('MM/DD/YYYY')
                        }
                    />
                    <StyledOptionallyRenderedTitleAndContentSection
                        title={'Current Status'}
                        content={currentStatus}
                        transformContent={(
                            currentStatus: ViolationCurrentStatus
                        ) => ViolationCurrentStatusStringified[currentStatus]}
                    />

                    <StyledOptionallyRenderedTitleAndContentSection
                        title={'Apartment'}
                        content={apartment}
                    />
                    <StyledOptionallyRenderedTitleAndContentSection
                        title={'Story'}
                        content={story}
                    />
                </Violations>
            </StyledCollapsibleItem>
        </HousingMaintenanceCodeViolationItem>
    );
};

const HousingMaintenanceCodeViolationsWrapper = styled.div({
    display: 'flex',
    flexDirection: 'column',
});

const TitleSection = styled.div({
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
});

const Violations = styled.div({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginRight: '10px',
});

const CurrentStatus = styled.div(({ isOpen }: { isOpen: boolean }) => ({
    font: FONT.RobotoBold,
    color: isOpen ? COLORS.red : COLORS.darkestBlue,
    marginLeft: 'auto',
    marginRight: '20px',
}));

const HousingMaintenanceCodeViolationItem = styled.div({
    display: 'flex',
    flexDirection: 'row',
    marginTop: '20px',
    marginBottom: '20px',
    paddingBottom: '30px',
    borderBottom: `1px solid ${COLORS.grey}`,
});

const StyledOptionallyRenderedTitleAndContentSection = styled(
    OptionallyRenderedTitleAndContentSection
)({
    [`${TitleAndContent.TitleSection}`]: {
        width: '220px',
    },
    [`${TitleAndContent.Content}`]: {
        width: '100%',
    },
    width: '100%',
});

const StyledCollapsibleItem = styled(CollapsibleItem)({
    width: '100%',
});
