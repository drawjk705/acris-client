/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: registrationContact
// ====================================================

export interface registrationContact_businessAddress {
  __typename: "Address";
  addressLineOne: string | null;
  addressLineTwo: string | null;
  city: string | null;
  state: string | null;
  zipCode: string | null;
}

export interface registrationContact {
  __typename: "RegistrationContacts";
  businessAddress: registrationContact_businessAddress | null;
  contactDescription: string | null;
  corporationName: string | null;
  firstName: string | null;
  lastName: string | null;
  middleInitial: string | null;
  title: string | null;
  type: string | null;
}
