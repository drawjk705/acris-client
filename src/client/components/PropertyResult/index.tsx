import React, { useState, useCallback, useReducer } from 'react';
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
import { Sidebar } from '../Navigation/Sidebar';
import { NavigationProvider } from '../Navigation/NavigationContext';

export const PropertyResult: React.FC<Property_property> = ({
    documents,
    hpdJurisdictionData,
    housingMaintenanceCodeViolations,
    taxClassData,
    ...props
}) => {
    return (
        <NavigationProvider>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <StyledSidebar />
                <PropertyResultWrapper>
                    <SectionWrapper>
                        <StyledAddressAndTypeSection {...props} />
                        <BoroughBlockLotSection {...props} />
                        {hpdJurisdictionData && (
                            <HpdJurisdictionDataSection
                                {...hpdJurisdictionData}
                            />
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
                        props={{
                            violations: housingMaintenanceCodeViolations,
                        }}
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
            </div>
        </NavigationProvider>
    );
};

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

const StyledSidebar = styled(Sidebar)({
    position: 'sticky',
    top: '0',
    height: '100%',
});
