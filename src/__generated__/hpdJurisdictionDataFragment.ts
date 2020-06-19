/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { HpdJurisdictionRecordStatus } from "./globalTypes";

// ====================================================
// GraphQL fragment: hpdJurisdictionDataFragment
// ====================================================

export interface hpdJurisdictionDataFragment_registrationContacts_businessAddress {
  __typename: "Address";
  addressLineOne: string | null;
  addressLineTwo: string | null;
  city: string | null;
  state: string | null;
  zipCode: string | null;
}

export interface hpdJurisdictionDataFragment_registrationContacts {
  __typename: "RegistrationContacts";
  businessAddress: hpdJurisdictionDataFragment_registrationContacts_businessAddress | null;
  contactDescription: string | null;
  corporationName: string | null;
  firstName: string | null;
  lastName: string | null;
  middleInitial: string | null;
  title: string | null;
  type: string | null;
}

export interface hpdJurisdictionDataFragment {
  __typename: "HpdJurisdictionData";
  buildingId: number | null;
  communityBoardId: number | null;
  lifecycleStage: string | null;
  managementProgram: string | null;
  numberOfApartments: number | null;
  numberOfLegalStories: number | null;
  numberOfRooms: number | null;
  recordStatus: HpdJurisdictionRecordStatus | null;
  recordStatusId: number | null;
  registrationContacts: (hpdJurisdictionDataFragment_registrationContacts | null)[];
  registrationId: number;
}
