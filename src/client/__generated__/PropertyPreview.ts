/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Borough } from "./globalTypes";

// ====================================================
// GraphQL query operation: PropertyPreview
// ====================================================

export interface PropertyPreview_property_document {
  amount: string | null;
  crfn: string | null;
  date: any | null;
  id: string;
}

export interface PropertyPreview_property {
  bble: string;
  borough: Borough;
  block: number;
  lot: number;
  streetNumber: string | null;
  streetName: string | null;
  document: PropertyPreview_property_document | null;
}

export interface PropertyPreview {
  property: (PropertyPreview_property | null)[];
}

export interface PropertyPreviewVariables {
  streetNumber?: string | null;
  streetName?: string | null;
  borough?: Borough | null;
  block?: number | null;
  lot?: number | null;
}
