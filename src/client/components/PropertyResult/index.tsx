import React from 'react';
import styled from '@emotion/styled';
import { Property_property } from '../../__generated__/Property';
import {
    AddressAndTypeSection,
    SectionTitleWrapper,
} from '../sections/AddressAndTypeSection';
import { BoroughBlockLotSection } from '../sections/BoroughBlockLotSection';
import { HousingMaintenanceCodeViolationsSection } from '../sections/HousingMaintenanceCodeViolationsSection';
import { TaxClassDataSection } from '../sections/TaxClassDataSection';
import { HpdJurisdictionDataSection } from '../sections/HpdJurisdictionDataSection';
import { Section } from '../sections/Section';
import { DocumentsSection } from '../sections/DocumentsSection';

export const PropertyResult: React.FC<Property_property> = ({
    documents,
    hpdJurisdictionData,
    housingMaintenanceCodeViolations,
    taxClassData,
    ...props
}) => (
    <PropertyResultWrapper>
        <SectionWrapper>
            <StyledAddressAndTypeSection {...props} />
            <BoroughBlockLotSection {...props} />
            {hpdJurisdictionData && (
                <HpdJurisdictionDataSection {...hpdJurisdictionData} />
            )}
        </SectionWrapper>
        <Section
            header={'Documents'}
            props={{ documents }}
            propTest={documents}
            component={DocumentsSection}
        />
        <Section
            header={'Housing Maintenance Code Violations'}
            props={{ violations: housingMaintenanceCodeViolations }}
            propTest={housingMaintenanceCodeViolations[0]}
            component={HousingMaintenanceCodeViolationsSection}
        />
        <Section
            header={'Tax Class Data'}
            props={{ taxClassData }}
            propTest={taxClassData}
            component={StyledTaxClassDataSection}
        />
    </PropertyResultWrapper>
);

const PropertyResultWrapper = styled.div({});

const StyledAddressAndTypeSection = styled(AddressAndTypeSection)({
    [`${SectionTitleWrapper}`]: {
        fontSize: '30px',
    },
});

const SectionWrapper = styled.div({
    marginTop: '10px',
    marginBottom: '5px',
});

const StyledTaxClassDataSection = styled(TaxClassDataSection)({
    marginTop: '20px',
});
