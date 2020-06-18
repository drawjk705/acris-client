/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: assessmentAndExemptionValuation
// ====================================================

export interface assessmentAndExemptionValuation_assessment {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface assessmentAndExemptionValuation_exemption {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface assessmentAndExemptionValuation {
  __typename: "AssessmentAndExemptionValuation";
  assessment: assessmentAndExemptionValuation_assessment | null;
  exemption: assessmentAndExemptionValuation_exemption | null;
}
