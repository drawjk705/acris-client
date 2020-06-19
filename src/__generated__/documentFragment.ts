/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: documentFragment
// ====================================================

export interface documentFragment_parties_address {
  __typename: "Address";
  addressLineOne: string | null;
  addressLineTwo: string | null;
  city: string | null;
  state: string | null;
  zipCode: string | null;
}

export interface documentFragment_parties {
  __typename: "Party";
  name: string | null;
  documentId: string | null;
  address: documentFragment_parties_address | null;
}

export interface documentFragment {
  __typename: "Document";
  amount: string | null;
  crfn: string | null;
  date: any | null;
  id: string;
  parties: documentFragment_parties[] | null;
  type: string | null;
}
