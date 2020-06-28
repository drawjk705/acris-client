/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Borough } from "./globalTypes";

// ====================================================
// GraphQL query operation: PropertyPreview
// ====================================================

export interface PropertyPreview_property_propertyType {
  description: string | null;
}

export interface PropertyPreview_property_documents_type {
  classCodeDescription: string | null;
}

export interface PropertyPreview_property_documents {
  legalDateRecorded: any | null;
  id: string;
  type: PropertyPreview_property_documents_type;
}

export interface PropertyPreview_property {
  bble: string;
  borough: Borough;
  block: number;
  lot: number;
  streetNumber: string | null;
  streetName: string | null;
  propertyType: PropertyPreview_property_propertyType | null;
  documents: (PropertyPreview_property_documents | null)[];
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
