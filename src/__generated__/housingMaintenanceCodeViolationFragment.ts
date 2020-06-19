/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ViolationCurrentStatus, ViolationStatus } from "./globalTypes";

// ====================================================
// GraphQL fragment: housingMaintenanceCodeViolationFragment
// ====================================================

export interface housingMaintenanceCodeViolationFragment {
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
