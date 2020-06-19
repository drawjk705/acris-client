/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: assessmentAndExemptionValuationFragment
// ====================================================

export interface assessmentAndExemptionValuationFragment_assessment {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface assessmentAndExemptionValuationFragment_exemption {
  __typename: "Valuation";
  landValue: number | null;
  totalValue: number | null;
}

export interface assessmentAndExemptionValuationFragment {
  __typename: "AssessmentAndExemptionValuation";
  assessment: assessmentAndExemptionValuationFragment_assessment | null;
  exemption: assessmentAndExemptionValuationFragment_exemption | null;
}
