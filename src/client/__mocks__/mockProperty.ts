import { mockDocuments } from './mockDocuments';
import { mockHousingMaintenanceCodeViolations } from './mockHousingMaintenanceCodeViolations';
import { mockTaxClassData } from './mockTaxClassData';
import { mockValuationAndAssessmentData } from './mockValuationAndAssessmentData';
import { Borough } from '../__generated__/globalTypes';
import { Property_property } from '../__generated__/Property';
import { mockHpdJurisdictionData } from './mockHpdJurisdictionData';

export const mockProperty: Property_property = {
    bble: '1012320036',
    block: 1232,
    lot: 36,
    borough: Borough.MANHATTAN,
    documents: mockDocuments,
    hpdJurisdictionData: mockHpdJurisdictionData,
    housingMaintenanceCodeViolations: mockHousingMaintenanceCodeViolations,
    propertyType: {
        description: 'APARTMENT BUILDING',
        propertyType: 'AP',
        recordType: 'G',
    },
    streetNumber: '200',
    streetName: 'WEST 85TH STREET',
    taxClassData: mockTaxClassData,
    unit: null,
    valuationAndAssessmentData: mockValuationAndAssessmentData,
};
