/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum Borough {
  BRONX = "BRONX",
  BROOKLYN = "BROOKLYN",
  MANHATTAN = "MANHATTAN",
  QUEENS = "QUEENS",
  STATEN_ISLAND = "STATEN_ISLAND",
}

export enum HpdJurisdictionRecordStatus {
  Active = "Active",
  Inactive = "Inactive",
  Pending = "Pending",
}

export enum ViolationCurrentStatus {
  CERTIFICATION_POSTPONMENT_DENIED = "CERTIFICATION_POSTPONMENT_DENIED",
  CERTIFICATION_POSTPONMENT_GRANTED = "CERTIFICATION_POSTPONMENT_GRANTED",
  CIV14_MAILED = "CIV14_MAILED",
  COMPLIED_IN_ACCESS_AREA = "COMPLIED_IN_ACCESS_AREA",
  DEFECT_LETTER_ISSUED = "DEFECT_LETTER_ISSUED",
  FALSE_CERTIFICATION = "FALSE_CERTIFICATION",
  FIRST_NO_ACCESS_TO_RE_INSPECT_VIOLATION = "FIRST_NO_ACCESS_TO_RE_INSPECT_VIOLATION",
  INFO_NOV_SENT_OUT = "INFO_NOV_SENT_OUT",
  INVALID_CERTIFICATION = "INVALID_CERTIFICATION",
  NOTICE_OF_ISSUANCE_SENT_TO_TENANT = "NOTICE_OF_ISSUANCE_SENT_TO_TENANT",
  NOT_COMPLIED_WITH = "NOT_COMPLIED_WITH",
  NOV_CERTIFIED_LATE = "NOV_CERTIFIED_LATE",
  NOV_CERTIFIED_ON_TIME = "NOV_CERTIFIED_ON_TIME",
  NOV_SENT_OUT = "NOV_SENT_OUT",
  SECOND_NO_ACCESS_TO_RE_INSPECT_VIOLATION = "SECOND_NO_ACCESS_TO_RE_INSPECT_VIOLATION",
  VIOLATION_CLOSED = "VIOLATION_CLOSED",
  VIOLATION_DISMISSED = "VIOLATION_DISMISSED",
  VIOLATION_OPEN = "VIOLATION_OPEN",
  VIOLATION_REOPEN = "VIOLATION_REOPEN",
  VIOLATION_WILL_BE_REINSPECTED = "VIOLATION_WILL_BE_REINSPECTED",
}

export enum ViolationStatus {
  Close = "Close",
  Open = "Open",
}

export interface BoroughBlockLotInput {
  borough: Borough;
  block: number;
  lot: number;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
