/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Borough, ViolationCurrentStatus, ViolationStatus } from "./globalTypes";

// ====================================================
// GraphQL fragment: propertyFragment
// ====================================================

export interface propertyFragment_document_parties_address {
  __typename: "Address";
  addressLineOne: string | null;
  addressLineTwo: string | null;
  city: string | null;
  state: string | null;
  zipCode: string | null;
}

export interface propertyFragment_document_parties {
  __typename: "Party";
  name: string | null;
  documentId: string | null;
  address: propertyFragment_document_parties_address | null;
}

export interface propertyFragment_document {
  __typename: "Document";
  amount: string | null;
  crfn: string | null;
  date: any | null;
  id: string;
  parties: propertyFragment_document_parties[] | null;
  type: string | null;
}

export interface propertyFragment_housingMaintenanceCodeViolations {
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

export interface propertyFragment_propertyType {
  __typename: "PropertyType";
  description: string | null;
  propertyType: string | null;
  recordType: string | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_actual_assessment {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_actual_exemption {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_actual {
  __typename: "AssessmentAndExemptionValuation";
  assessment: propertyFragment_taxClassData_assessmentAndExemptionValuations_actual_assessment | null;
  exemption: propertyFragment_taxClassData_assessmentAndExemptionValuations_actual_exemption | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_changeByNoticeActual_assessment {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_changeByNoticeActual_exemption {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_changeByNoticeActual {
  __typename: "AssessmentAndExemptionValuation";
  assessment: propertyFragment_taxClassData_assessmentAndExemptionValuations_changeByNoticeActual_assessment | null;
  exemption: propertyFragment_taxClassData_assessmentAndExemptionValuations_changeByNoticeActual_exemption | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_changeByNoticeMarket_assessment {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_changeByNoticeMarket_exemption {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_changeByNoticeMarket {
  __typename: "AssessmentAndExemptionValuation";
  assessment: propertyFragment_taxClassData_assessmentAndExemptionValuations_changeByNoticeMarket_assessment | null;
  exemption: propertyFragment_taxClassData_assessmentAndExemptionValuations_changeByNoticeMarket_exemption | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_changeByNoticeTaxable_assessment {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_changeByNoticeTaxable_exemption {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_changeByNoticeTaxable {
  __typename: "AssessmentAndExemptionValuation";
  assessment: propertyFragment_taxClassData_assessmentAndExemptionValuations_changeByNoticeTaxable_assessment | null;
  exemption: propertyFragment_taxClassData_assessmentAndExemptionValuations_changeByNoticeTaxable_exemption | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_changeByNoticeTransitional_assessment {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_changeByNoticeTransitional_exemption {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_changeByNoticeTransitional {
  __typename: "AssessmentAndExemptionValuation";
  assessment: propertyFragment_taxClassData_assessmentAndExemptionValuations_changeByNoticeTransitional_assessment | null;
  exemption: propertyFragment_taxClassData_assessmentAndExemptionValuations_changeByNoticeTransitional_exemption | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_currentActual_assessment {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_currentActual_exemption {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_currentActual {
  __typename: "AssessmentAndExemptionValuation";
  assessment: propertyFragment_taxClassData_assessmentAndExemptionValuations_currentActual_assessment | null;
  exemption: propertyFragment_taxClassData_assessmentAndExemptionValuations_currentActual_exemption | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_currentMarket_assessment {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_currentMarket_exemption {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_currentMarket {
  __typename: "AssessmentAndExemptionValuation";
  assessment: propertyFragment_taxClassData_assessmentAndExemptionValuations_currentMarket_assessment | null;
  exemption: propertyFragment_taxClassData_assessmentAndExemptionValuations_currentMarket_exemption | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_currentTaxable_assessment {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_currentTaxable_exemption {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_currentTaxable {
  __typename: "AssessmentAndExemptionValuation";
  assessment: propertyFragment_taxClassData_assessmentAndExemptionValuations_currentTaxable_assessment | null;
  exemption: propertyFragment_taxClassData_assessmentAndExemptionValuations_currentTaxable_exemption | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_currentTransitional_assessment {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_currentTransitional_exemption {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_currentTransitional {
  __typename: "AssessmentAndExemptionValuation";
  assessment: propertyFragment_taxClassData_assessmentAndExemptionValuations_currentTransitional_assessment | null;
  exemption: propertyFragment_taxClassData_assessmentAndExemptionValuations_currentTransitional_exemption | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_finalActual_assessment {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_finalActual_exemption {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_finalActual {
  __typename: "AssessmentAndExemptionValuation";
  assessment: propertyFragment_taxClassData_assessmentAndExemptionValuations_finalActual_assessment | null;
  exemption: propertyFragment_taxClassData_assessmentAndExemptionValuations_finalActual_exemption | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_finalMarket_assessment {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_finalMarket_exemption {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_finalMarket {
  __typename: "AssessmentAndExemptionValuation";
  assessment: propertyFragment_taxClassData_assessmentAndExemptionValuations_finalMarket_assessment | null;
  exemption: propertyFragment_taxClassData_assessmentAndExemptionValuations_finalMarket_exemption | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_finalTransitional_assessment {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_finalTransitional_exemption {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_finalTransitional {
  __typename: "AssessmentAndExemptionValuation";
  assessment: propertyFragment_taxClassData_assessmentAndExemptionValuations_finalTransitional_assessment | null;
  exemption: propertyFragment_taxClassData_assessmentAndExemptionValuations_finalTransitional_exemption | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_market_assessment {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_market_exemption {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_market {
  __typename: "AssessmentAndExemptionValuation";
  assessment: propertyFragment_taxClassData_assessmentAndExemptionValuations_market_assessment | null;
  exemption: propertyFragment_taxClassData_assessmentAndExemptionValuations_market_exemption | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_taxable_assessment {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_taxable_exemption {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_taxable {
  __typename: "AssessmentAndExemptionValuation";
  assessment: propertyFragment_taxClassData_assessmentAndExemptionValuations_taxable_assessment | null;
  exemption: propertyFragment_taxClassData_assessmentAndExemptionValuations_taxable_exemption | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_tentativeActual_assessment {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_tentativeActual_exemption {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_tentativeActual {
  __typename: "AssessmentAndExemptionValuation";
  assessment: propertyFragment_taxClassData_assessmentAndExemptionValuations_tentativeActual_assessment | null;
  exemption: propertyFragment_taxClassData_assessmentAndExemptionValuations_tentativeActual_exemption | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_tentativeMarket_assessment {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_tentativeMarket_exemption {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_tentativeMarket {
  __typename: "AssessmentAndExemptionValuation";
  assessment: propertyFragment_taxClassData_assessmentAndExemptionValuations_tentativeMarket_assessment | null;
  exemption: propertyFragment_taxClassData_assessmentAndExemptionValuations_tentativeMarket_exemption | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_tentativeTaxable_assessment {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_tentativeTaxable_exemption {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_tentativeTaxable {
  __typename: "AssessmentAndExemptionValuation";
  assessment: propertyFragment_taxClassData_assessmentAndExemptionValuations_tentativeTaxable_assessment | null;
  exemption: propertyFragment_taxClassData_assessmentAndExemptionValuations_tentativeTaxable_exemption | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_tentativeTransitional_assessment {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_tentativeTransitional_exemption {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_tentativeTransitional {
  __typename: "AssessmentAndExemptionValuation";
  assessment: propertyFragment_taxClassData_assessmentAndExemptionValuations_tentativeTransitional_assessment | null;
  exemption: propertyFragment_taxClassData_assessmentAndExemptionValuations_tentativeTransitional_exemption | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_transitional_assessment {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_transitional_exemption {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations_transitional {
  __typename: "AssessmentAndExemptionValuation";
  assessment: propertyFragment_taxClassData_assessmentAndExemptionValuations_transitional_assessment | null;
  exemption: propertyFragment_taxClassData_assessmentAndExemptionValuations_transitional_exemption | null;
}

export interface propertyFragment_taxClassData_assessmentAndExemptionValuations {
  __typename: "AssessmentAndExemptionValuations";
  actual: propertyFragment_taxClassData_assessmentAndExemptionValuations_actual | null;
  changeByNoticeActual: propertyFragment_taxClassData_assessmentAndExemptionValuations_changeByNoticeActual | null;
  changeByNoticeMarket: propertyFragment_taxClassData_assessmentAndExemptionValuations_changeByNoticeMarket | null;
  changeByNoticeTaxable: propertyFragment_taxClassData_assessmentAndExemptionValuations_changeByNoticeTaxable | null;
  changeByNoticeTransitional: propertyFragment_taxClassData_assessmentAndExemptionValuations_changeByNoticeTransitional | null;
  currentActual: propertyFragment_taxClassData_assessmentAndExemptionValuations_currentActual | null;
  currentMarket: propertyFragment_taxClassData_assessmentAndExemptionValuations_currentMarket | null;
  currentTaxable: propertyFragment_taxClassData_assessmentAndExemptionValuations_currentTaxable | null;
  currentTransitional: propertyFragment_taxClassData_assessmentAndExemptionValuations_currentTransitional | null;
  finalActual: propertyFragment_taxClassData_assessmentAndExemptionValuations_finalActual | null;
  finalMarket: propertyFragment_taxClassData_assessmentAndExemptionValuations_finalMarket | null;
  finalTransitional: propertyFragment_taxClassData_assessmentAndExemptionValuations_finalTransitional | null;
  market: propertyFragment_taxClassData_assessmentAndExemptionValuations_market | null;
  taxable: propertyFragment_taxClassData_assessmentAndExemptionValuations_taxable | null;
  tentativeActual: propertyFragment_taxClassData_assessmentAndExemptionValuations_tentativeActual | null;
  tentativeMarket: propertyFragment_taxClassData_assessmentAndExemptionValuations_tentativeMarket | null;
  tentativeTaxable: propertyFragment_taxClassData_assessmentAndExemptionValuations_tentativeTaxable | null;
  tentativeTransitional: propertyFragment_taxClassData_assessmentAndExemptionValuations_tentativeTransitional | null;
  transitional: propertyFragment_taxClassData_assessmentAndExemptionValuations_transitional | null;
}

export interface propertyFragment_taxClassData_dimensions {
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

export interface propertyFragment_taxClassData {
  __typename: "TaxClassData";
  assessmentAndExemptionValuations: propertyFragment_taxClassData_assessmentAndExemptionValuations | null;
  buildingConstructionYear: string | null;
  coopApartmentCount: number | null;
  coopIdNumber: number | null;
  dimensions: propertyFragment_taxClassData_dimensions | null;
  hasExtension: boolean | null;
  storyCount: number | null;
  unitCount: number | null;
  zoningCode: string | null;
}

export interface propertyFragment_valuationAndAssessmentData {
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

export interface propertyFragment {
  __typename: "Property";
  bble: string;
  block: number;
  lot: number;
  borough: Borough;
  document: propertyFragment_document | null;
  housingMaintenanceCodeViolations: (propertyFragment_housingMaintenanceCodeViolations | null)[];
  propertyType: propertyFragment_propertyType | null;
  registrationId: number;
  streetNumber: string | null;
  streetName: string | null;
  taxClassData: (propertyFragment_taxClassData | null)[];
  unit: string | null;
  valuationAndAssessmentData: (propertyFragment_valuationAndAssessmentData | null)[];
}
