import { mockDocument } from './mockDocument';
import { mockHousingMaintenanceCodeViolations } from './mockHousingMaintenanceCodeViolations';
import { mockTaxClassData } from './mockTaxClassData';
import { mockValuationAndAssessmentData } from './mockValuationAndAssessmentData';

export const mockProperty = {
    bble: '1012320036',
    block: 1232,
    lot: 36,
    borough: 'MANHATTAN',
    document: mockDocument,
    housingMaintenanceCodeViolations: mockHousingMaintenanceCodeViolations,
    propertyType: {
        description: 'APARTMENT BUILDING',
        propertyType: 'AP',
        recordType: 'G',
    },
    registrationId: 102033,
    streetNumber: '200',
    streetName: 'WEST 85TH STREET',
    taxClassData: mockTaxClassData,
    unit: null,
    valuationAndAssessmentData: mockValuationAndAssessmentData,
};
