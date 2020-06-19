/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: partyFragment
// ====================================================

export interface partyFragment_address {
  __typename: "Address";
  addressLineOne: string | null;
  addressLineTwo: string | null;
  city: string | null;
  state: string | null;
  zipCode: string | null;
}

export interface partyFragment {
  __typename: "Party";
  name: string | null;
  documentId: string | null;
  address: partyFragment_address | null;
}
