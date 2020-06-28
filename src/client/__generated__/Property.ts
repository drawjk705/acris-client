/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Borough, ViolationCurrentStatus, ViolationStatus } from "./globalTypes";

// ====================================================
// GraphQL query operation: Property
// ====================================================

export interface Property_property_propertyType {
  description: string | null;
  propertyType: string | null;
  recordType: string | null;
}

export interface Property_property_documents_parties_address {
  addressLineOne: string | null;
  addressLineTwo: string | null;
  city: string | null;
  state: string | null;
  zipCode: string | null;
}

export interface Property_property_documents_parties {
  name: string | null;
  partyType: string | null;
  documentId: string | null;
  address: Property_property_documents_parties_address | null;
}

export interface Property_property_documents_type {
  typeId: string;
  documentType: string | null;
  classCodeDescription: string | null;
  partyOneType: string | null;
  partyTwoType: string | null;
  partyThreeType: string | null;
}

export interface Property_property_documents {
  amount: string | null;
  crfn: string | null;
  dateOnDocument: any | null;
  legalDateRecorded: any | null;
  dateModified: any | null;
  goodThroughDate: any | null;
  id: string;
  parties: Property_property_documents_parties[] | null;
  type: Property_property_documents_type;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_actual_assessment {
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_actual_exemption {
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_actual {
  assessment: Property_property_taxClassData_assessmentAndExemptionValuations_actual_assessment | null;
  exemption: Property_property_taxClassData_assessmentAndExemptionValuations_actual_exemption | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_changeByNoticeActual_assessment {
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_changeByNoticeActual_exemption {
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_changeByNoticeActual {
  assessment: Property_property_taxClassData_assessmentAndExemptionValuations_changeByNoticeActual_assessment | null;
  exemption: Property_property_taxClassData_assessmentAndExemptionValuations_changeByNoticeActual_exemption | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_changeByNoticeMarket_assessment {
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_changeByNoticeMarket_exemption {
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_changeByNoticeMarket {
  assessment: Property_property_taxClassData_assessmentAndExemptionValuations_changeByNoticeMarket_assessment | null;
  exemption: Property_property_taxClassData_assessmentAndExemptionValuations_changeByNoticeMarket_exemption | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_changeByNoticeTaxable_assessment {
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_changeByNoticeTaxable_exemption {
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_changeByNoticeTaxable {
  assessment: Property_property_taxClassData_assessmentAndExemptionValuations_changeByNoticeTaxable_assessment | null;
  exemption: Property_property_taxClassData_assessmentAndExemptionValuations_changeByNoticeTaxable_exemption | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_changeByNoticeTransitional_assessment {
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_changeByNoticeTransitional_exemption {
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_changeByNoticeTransitional {
  assessment: Property_property_taxClassData_assessmentAndExemptionValuations_changeByNoticeTransitional_assessment | null;
  exemption: Property_property_taxClassData_assessmentAndExemptionValuations_changeByNoticeTransitional_exemption | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_currentActual_assessment {
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_currentActual_exemption {
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_currentActual {
  assessment: Property_property_taxClassData_assessmentAndExemptionValuations_currentActual_assessment | null;
  exemption: Property_property_taxClassData_assessmentAndExemptionValuations_currentActual_exemption | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_currentMarket_assessment {
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_currentMarket_exemption {
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_currentMarket {
  assessment: Property_property_taxClassData_assessmentAndExemptionValuations_currentMarket_assessment | null;
  exemption: Property_property_taxClassData_assessmentAndExemptionValuations_currentMarket_exemption | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_currentTaxable_assessment {
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_currentTaxable_exemption {
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_currentTaxable {
  assessment: Property_property_taxClassData_assessmentAndExemptionValuations_currentTaxable_assessment | null;
  exemption: Property_property_taxClassData_assessmentAndExemptionValuations_currentTaxable_exemption | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_currentTransitional_assessment {
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_currentTransitional_exemption {
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_currentTransitional {
  assessment: Property_property_taxClassData_assessmentAndExemptionValuations_currentTransitional_assessment | null;
  exemption: Property_property_taxClassData_assessmentAndExemptionValuations_currentTransitional_exemption | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_finalActual_assessment {
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_finalActual_exemption {
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_finalActual {
  assessment: Property_property_taxClassData_assessmentAndExemptionValuations_finalActual_assessment | null;
  exemption: Property_property_taxClassData_assessmentAndExemptionValuations_finalActual_exemption | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_finalMarket_assessment {
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_finalMarket_exemption {
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_finalMarket {
  assessment: Property_property_taxClassData_assessmentAndExemptionValuations_finalMarket_assessment | null;
  exemption: Property_property_taxClassData_assessmentAndExemptionValuations_finalMarket_exemption | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_finalTransitional_assessment {
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_finalTransitional_exemption {
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_finalTransitional {
  assessment: Property_property_taxClassData_assessmentAndExemptionValuations_finalTransitional_assessment | null;
  exemption: Property_property_taxClassData_assessmentAndExemptionValuations_finalTransitional_exemption | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_market_assessment {
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_market_exemption {
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_market {
  assessment: Property_property_taxClassData_assessmentAndExemptionValuations_market_assessment | null;
  exemption: Property_property_taxClassData_assessmentAndExemptionValuations_market_exemption | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_taxable_assessment {
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_taxable_exemption {
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_taxable {
  assessment: Property_property_taxClassData_assessmentAndExemptionValuations_taxable_assessment | null;
  exemption: Property_property_taxClassData_assessmentAndExemptionValuations_taxable_exemption | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_tentativeActual_assessment {
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_tentativeActual_exemption {
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_tentativeActual {
  assessment: Property_property_taxClassData_assessmentAndExemptionValuations_tentativeActual_assessment | null;
  exemption: Property_property_taxClassData_assessmentAndExemptionValuations_tentativeActual_exemption | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_tentativeMarket_assessment {
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_tentativeMarket_exemption {
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_tentativeMarket {
  assessment: Property_property_taxClassData_assessmentAndExemptionValuations_tentativeMarket_assessment | null;
  exemption: Property_property_taxClassData_assessmentAndExemptionValuations_tentativeMarket_exemption | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_tentativeTaxable_assessment {
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_tentativeTaxable_exemption {
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_tentativeTaxable {
  assessment: Property_property_taxClassData_assessmentAndExemptionValuations_tentativeTaxable_assessment | null;
  exemption: Property_property_taxClassData_assessmentAndExemptionValuations_tentativeTaxable_exemption | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_tentativeTransitional_assessment {
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_tentativeTransitional_exemption {
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_tentativeTransitional {
  assessment: Property_property_taxClassData_assessmentAndExemptionValuations_tentativeTransitional_assessment | null;
  exemption: Property_property_taxClassData_assessmentAndExemptionValuations_tentativeTransitional_exemption | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_transitional_assessment {
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_transitional_exemption {
  landValue: number | null;
  totalValue: number | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations_transitional {
  assessment: Property_property_taxClassData_assessmentAndExemptionValuations_transitional_assessment | null;
  exemption: Property_property_taxClassData_assessmentAndExemptionValuations_transitional_exemption | null;
}

export interface Property_property_taxClassData_assessmentAndExemptionValuations {
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
  buildingConstructionYear: string | null;
  coopApartmentCount: number | null;
  coopIdNumber: number | null;
  hasExtension: boolean | null;
  storyCount: number | null;
  unitCount: number | null;
  zoningCode: string | null;
  assessmentAndExemptionValuations: Property_property_taxClassData_assessmentAndExemptionValuations | null;
  dimensions: Property_property_taxClassData_dimensions | null;
}

export interface Property_property_valuationAndAssessmentData {
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

export interface Property_property_housingMaintenanceCodeViolations {
  apartment: string | null;
  story: string | null;
  inspectionDate: string | null;
  originalCertifyByDate: any | null;
  originalCorrectByDate: any | null;
  newCertifyByDate: any | null;
  newCorrectByDate: any | null;
  orderNumber: string | null;
  novDescription: string | null;
  novIssuedDate: any | null;
  currentStatus: ViolationCurrentStatus | null;
  communityBoard: string | null;
  violationStatus: ViolationStatus | null;
}

export interface Property_property {
  bble: string;
  borough: Borough;
  block: number;
  lot: number;
  streetNumber: string | null;
  streetName: string | null;
  unit: string | null;
  propertyType: Property_property_propertyType | null;
  documents: (Property_property_documents | null)[];
  taxClassData: (Property_property_taxClassData | null)[];
  valuationAndAssessmentData: (Property_property_valuationAndAssessmentData | null)[];
  housingMaintenanceCodeViolations: (Property_property_housingMaintenanceCodeViolations | null)[];
}

export interface Property {
  property: (Property_property | null)[];
}

export interface PropertyVariables {
  streetNumber?: string | null;
  streetName?: string | null;
  borough?: Borough | null;
  block?: number | null;
  lot?: number | null;
  documentId?: string | null;
}
