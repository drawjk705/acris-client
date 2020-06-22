import gql from 'graphql-tag';

export const addressFragment = gql`
    fragment addressFragment on Address {
        addressLineOne
        addressLineTwo
        city
        state
        zipCode
    }
`;

export const assessmentAndExemptionValuationFragment = gql`
    fragment assessmentAndExemptionValuationFragment on AssessmentAndExemptionValuation {
        assessment {
            landValue
            totalValue
        }
        exemption {
            landValue
            totalValue
        }
    }
`;
