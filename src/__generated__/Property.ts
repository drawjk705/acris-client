/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { BoroughBlockLotInput, Borough, ViolationCurrentStatus, ViolationStatus } from "./globalTypes";

// ====================================================
// GraphQL query operation: Property
// ====================================================

export interface Property_property_document_parties_address {
  __typename: "Address";
  addressLineOne: string | null;
  addressLineTwo: string | null;
  city: string | null;
  state: string | null;
  zipCode: string | null;
}

export interface Property_property_document_parties {
  __typename: "Party";
  name: string | null;
  documentId: string | null;
  address: Property_property_document_parties_address | null;
}

export interface Property_property_document {
  __typename: "Document";
  amount: string | null;
  crfn: string | null;
  date: any | null;
  id: string;
  parties: Property_property_document_parties[] | null;
  type: string | null;
}

export interface Property_property_housingMaintenanceCodeViolations {
  __typename: "HousingMaintenanceCodeViolation";
  apartment: string | null;
  communityBoard: string | null;
  currentStatus: ViolationCurrentStatus | null;
  inspectionDate: string | null;
  newCertifyByDate: any | null;
  newCorrectByDate: any | null;
  novDescription: string | null;
  novIssuedDate: any | null;
  orderNumber: string | null;
  originalCertifyByDate: any | null;
  originalCorrectByDate: any | null;
  story: string | null;
  violationStatus: ViolationStatus | null;
}

export interface Property_property_propertyType {
  __typename: "PropertyType";
  description: string | null;
  propertyType: string | null;
  recordType: string | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_actual_assessment {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_actual_exemption {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_actual {
  __typename: "AssessmentAndExemptionValuation";
  assessment: Property_property_taxClassData_assessmentAndExemptionValuations_actual_assessment | null;
  exemption: Property_property_taxClassData_assessmentAndExemptionValuations_actual_exemption | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_changeByNoticeActual_assessment {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_changeByNoticeActual_exemption {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_changeByNoticeActual {
  __typename: "AssessmentAndExemptionValuation";
  assessment: Property_property_taxClassData_assessmentAndExemptionValuations_changeByNoticeActual_assessment | null;
  exemption: Property_property_taxClassData_assessmentAndExemptionValuations_changeByNoticeActual_exemption | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_changeByNoticeMarket_assessment {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_changeByNoticeMarket_exemption {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_changeByNoticeMarket {
  __typename: "AssessmentAndExemptionValuation";
  assessment: Property_property_taxClassData_assessmentAndExemptionValuations_changeByNoticeMarket_assessment | null;
  exemption: Property_property_taxClassData_assessmentAndExemptionValuations_changeByNoticeMarket_exemption | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_changeByNoticeTaxable_assessment {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_changeByNoticeTaxable_exemption {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_changeByNoticeTaxable {
  __typename: "AssessmentAndExemptionValuation";
  assessment: Property_property_taxClassData_assessmentAndExemptionValuations_changeByNoticeTaxable_assessment | null;
  exemption: Property_property_taxClassData_assessmentAndExemptionValuations_changeByNoticeTaxable_exemption | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_changeByNoticeTransitional_assessment {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_changeByNoticeTransitional_exemption {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_changeByNoticeTransitional {
  __typename: "AssessmentAndExemptionValuation";
  assessment: Property_property_taxClassData_assessmentAndExemptionValuations_changeByNoticeTransitional_assessment | null;
  exemption: Property_property_taxClassData_assessmentAndExemptionValuations_changeByNoticeTransitional_exemption | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_currentActual_assessment {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_currentActual_exemption {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_currentActual {
  __typename: "AssessmentAndExemptionValuation";
  assessment: Property_property_taxClassData_assessmentAndExemptionValuations_currentActual_assessment | null;
  exemption: Property_property_taxClassData_assessmentAndExemptionValuations_currentActual_exemption | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_currentMarket_assessment {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_currentMarket_exemption {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_currentMarket {
  __typename: "AssessmentAndExemptionValuation";
  assessment: Property_property_taxClassData_assessmentAndExemptionValuations_currentMarket_assessment | null;
  exemption: Property_property_taxClassData_assessmentAndExemptionValuations_currentMarket_exemption | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_currentTaxable_assessment {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_currentTaxable_exemption {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_currentTaxable {
  __typename: "AssessmentAndExemptionValuation";
  assessment: Property_property_taxClassData_assessmentAndExemptionValuations_currentTaxable_assessment | null;
  exemption: Property_property_taxClassData_assessmentAndExemptionValuations_currentTaxable_exemption | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_currentTransitional_assessment {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_currentTransitional_exemption {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_currentTransitional {
  __typename: "AssessmentAndExemptionValuation";
  assessment: Property_property_taxClassData_assessmentAndExemptionValuations_currentTransitional_assessment | null;
  exemption: Property_property_taxClassData_assessmentAndExemptionValuations_currentTransitional_exemption | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_finalActual_assessment {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_finalActual_exemption {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_finalActual {
  __typename: "AssessmentAndExemptionValuation";
  assessment: Property_property_taxClassData_assessmentAndExemptionValuations_finalActual_assessment | null;
  exemption: Property_property_taxClassData_assessmentAndExemptionValuations_finalActual_exemption | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_finalMarket_assessment {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_finalMarket_exemption {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_finalMarket {
  __typename: "AssessmentAndExemptionValuation";
  assessment: Property_property_taxClassData_assessmentAndExemptionValuations_finalMarket_assessment | null;
  exemption: Property_property_taxClassData_assessmentAndExemptionValuations_finalMarket_exemption | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_finalTransitional_assessment {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_finalTransitional_exemption {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_finalTransitional {
  __typename: "AssessmentAndExemptionValuation";
  assessment: Property_property_taxClassData_assessmentAndExemptionValuations_finalTransitional_assessment | null;
  exemption: Property_property_taxClassData_assessmentAndExemptionValuations_finalTransitional_exemption | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_market_assessment {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_market_exemption {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_market {
  __typename: "AssessmentAndExemptionValuation";
  assessment: Property_property_taxClassData_assessmentAndExemptionValuations_market_assessment | null;
  exemption: Property_property_taxClassData_assessmentAndExemptionValuations_market_exemption | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_taxable_assessment {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_taxable_exemption {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_taxable {
  __typename: "AssessmentAndExemptionValuation";
  assessment: Property_property_taxClassData_assessmentAndExemptionValuations_taxable_assessment | null;
  exemption: Property_property_taxClassData_assessmentAndExemptionValuations_taxable_exemption | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_tentativeActual_assessment {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_tentativeActual_exemption {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_tentativeActual {
  __typename: "AssessmentAndExemptionValuation";
  assessment: Property_property_taxClassData_assessmentAndExemptionValuations_tentativeActual_assessment | null;
  exemption: Property_property_taxClassData_assessmentAndExemptionValuations_tentativeActual_exemption | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_tentativeMarket_assessment {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_tentativeMarket_exemption {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_tentativeMarket {
  __typename: "AssessmentAndExemptionValuation";
  assessment: Property_property_taxClassData_assessmentAndExemptionValuations_tentativeMarket_assessment | null;
  exemption: Property_property_taxClassData_assessmentAndExemptionValuations_tentativeMarket_exemption | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_tentativeTaxable_assessment {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_tentativeTaxable_exemption {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_tentativeTaxable {
  __typename: "AssessmentAndExemptionValuation";
  assessment: Property_property_taxClassData_assessmentAndExemptionValuations_tentativeTaxable_assessment | null;
  exemption: Property_property_taxClassData_assessmentAndExemptionValuations_tentativeTaxable_exemption | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_tentativeTransitional_assessment {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_tentativeTransitional_exemption {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_tentativeTransitional {
  __typename: "AssessmentAndExemptionValuation";
  assessment: Property_property_taxClassData_assessmentAndExemptionValuations_tentativeTransitional_assessment | null;
  exemption: Property_property_taxClassData_assessmentAndExemptionValuations_tentativeTransitional_exemption | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_transitional_assessment {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_transitional_exemption {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_transitional {
  __typename: "AssessmentAndExemptionValuation";
  assessment: Property_property_taxClassData_assessmentAndExemptionValuations_transitional_assessment | null;
  exemption: Property_property_taxClassData_assessmentAndExemptionValuations_transitional_exemption | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations {
  __typename: "AssessmentAndExemptionValuations";
  actual: Property_property_taxClassData_assessmentAndExemptionValuations_actual | null;
  changeByNoticeActual: Property_property_taxClassData_assessmentAndExemptionValuations_changeByNoticeActual | null;
  changeByNoticeMarket: Property_property_taxClassData_assessmentAndExemptionValuations_changeByNoticeMarket | null;
  changeByNoticeTaxable: Property_property_taxClassData_assessmentAndExemptionValuations_changeByNoticeTaxable | null;
  changeByNoticeTransitional: Property_property_taxClassData_assessmentAndExemptionValuations_changeByNoticeTransitional | null;
  currentActual: Property_property_taxClassData_assessmentAndExemptionValuations_currentActual | null;
  currentMarket: Property_property_taxClassData_assessmentAndExemptionValuations_currentMarket | null;
  currentTaxable: Property_property_taxClassData_assessmentAndExemptionValuations_currentTaxable | null;
  currentTransitional: Property_property_taxClassData_assessmentAndExemptionValuations_currentTransitional | null;
  finalActual: Property_property_taxClassData_assessmentAndExemptionValuations_finalActual | null;
  finalMarket: Property_property_taxClassData_assessmentAndExemptionValuations_finalMarket | null;
  finalTransitional: Property_property_taxClassData_assessmentAndExemptionValuations_finalTransitional | null;
  market: Property_property_taxClassData_assessmentAndExemptionValuations_market | null;
  taxable: Property_property_taxClassData_assessmentAndExemptionValuations_taxable | null;
  tentativeActual: Property_property_taxClassData_assessmentAndExemptionValuations_tentativeActual | null;
  tentativeMarket: Property_property_taxClassData_assessmentAndExemptionValuations_tentativeMarket | null;
  tentativeTaxable: Property_property_taxClassData_assessmentAndExemptionValuations_tentativeTaxable | null;
  tentativeTransitional: Property_property_taxClassData_assessmentAndExemptionValuations_tentativeTransitional | null;
  transitional: Property_property_taxClassData_assessmentAndExemptionValuations_transitional | null;
}

export interface Property_property_taxClassData_dimensions {
  __typename: "Dimensions";
  buildingDepthFeet: number | null;
  buildingFrontageFeet: number | null;
  factoryAreaGrossSquarefootage: number | null;
  garageAreaGrossSquarefootage: number | null;
  grossSquarefootage: number | null;
  hotelAreaGrossSquarefootage: number | null;
  loftAreaGrossSquarefootage: number | null;
  lotDepthFeet: number | null;
  lotFrontageFeet: number | null;
  officeAreaGrossSquarefootage: number | null;
  otherAreaGrossSquarefootage: number | null;
  residentialAreaGrossSquarefootage: number | null;
  retailAreaGrossSquarefootage: number | null;
  storageAreaGrossSquarefootage: number | null;
  totalLandAreaFeet: number | null;
  warehouseAreaGrossSquarefootage: number | null;
}

export interface Property_property_taxClassData {
  __typename: "TaxClassData";
  assessmentAndExemptionValuations: Property_property_taxClassData_assessmentAndExemptionValuations | null;
  buildingConstructionYear: string | null;
  coopApartmentCount: number | null;
  coopIdNumber: number | null;
  dimensions: Property_property_taxClassData_dimensions | null;
  hasExtension: boolean | null;
  storyCount: number | null;
  unitCount: number | null;
  zoningCode: string | null;
}

export interface Property_property_valuationAndAssessmentData {
  __typename: "ValuationAndAssessmentData";
  actualExemptLandTotal: number | null;
  actualExemptLandValue: number | null;
  actualLandValue: number | null;
  actualTotalValue: number | null;
  assessmentYear: string | null;
  exceptionCodeOne: number | null;
  marketValue: number | null;
  numberOfStories: number | null;
  transitionalExemptionLandTotal: number | null;
  transitionalExemptionLandValue: number | null;
  transitionalLandValue: number | null;
  transitionalTotalValue: number | null;
}

export interface Property_property {
  __typename: "Property";
  bble: string;
  block: number;
  lot: number;
  borough: Borough;
  document: Property_property_document | null;
  housingMaintenanceCodeViolations: (Property_property_housingMaintenanceCodeViolations | null)[];
  propertyType: Property_property_propertyType | null;
  registrationId: number;
  streetNumber: string | null;
  streetName: string | null;
  taxClassData: (Property_property_taxClassData | null)[];
  unit: string | null;
  valuationAndAssessmentData: (Property_property_valuationAndAssessmentData | null)[];
}

export interface Property {
  property: (Property_property | null)[];
}

export interface PropertyVariables {
  streetNumber?: string | null;
  streetName?: string | null;
  boroughBlockLotInput?: BoroughBlockLotInput | null;
}
