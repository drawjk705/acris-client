import gql from 'graphql-tag';
import {
    addressFragment,
    assessmentAndExemptionValuationFragment,
} from './fragments';

export const GET_PROPERTY = gql`
    query Property(
        $streetNumber: String
        $streetName: String
        $boroughBlockLotInput: BoroughBlockLotInput
    ) {
        property(
            streetNumber: $streetNumber
            streetName: $streetName
            boroughBlockLot: $boroughBlockLotInput
        ) {
            bble
            borough
            block
            lot
            registrationId
            streetNumber
            streetName
            unit
            propertyType {
                description
                propertyType
                recordType
            }
            document {
                amount
                crfn
                date
                id
                parties {
                    name
                    partyType
                    documentId
                    address {
                        ...addressFragment
                    }
                }
                type {
                    typeId
                    documentType
                    classCodeDescription
                    partyOneType
                    partyTwoType
                    partyThreeType
                }
            }
            taxClassData {
                buildingConstructionYear
                coopApartmentCount
                coopIdNumber
                hasExtension
                storyCount
                unitCount
                zoningCode
                assessmentAndExemptionValuations {
                    actual {
                        ...assessmentAndExemptionValuationFragment
                    }
                    changeByNoticeActual {
                        ...assessmentAndExemptionValuationFragment
                    }
                    changeByNoticeMarket {
                        ...assessmentAndExemptionValuationFragment
                    }
                    changeByNoticeTaxable {
                        ...assessmentAndExemptionValuationFragment
                    }
                    changeByNoticeTransitional {
                        ...assessmentAndExemptionValuationFragment
                    }
                    currentActual {
                        ...assessmentAndExemptionValuationFragment
                    }
                    currentMarket {
                        ...assessmentAndExemptionValuationFragment
                    }
                    currentTaxable {
                        ...assessmentAndExemptionValuationFragment
                    }
                    currentTransitional {
                        ...assessmentAndExemptionValuationFragment
                    }
                    finalActual {
                        ...assessmentAndExemptionValuationFragment
                    }
                    finalMarket {
                        ...assessmentAndExemptionValuationFragment
                    }
                    finalTransitional {
                        ...assessmentAndExemptionValuationFragment
                    }
                    market {
                        ...assessmentAndExemptionValuationFragment
                    }
                    taxable {
                        ...assessmentAndExemptionValuationFragment
                    }
                    tentativeActual {
                        ...assessmentAndExemptionValuationFragment
                    }
                    tentativeMarket {
                        ...assessmentAndExemptionValuationFragment
                    }
                    tentativeTaxable {
                        ...assessmentAndExemptionValuationFragment
                    }
                    tentativeTransitional {
                        ...assessmentAndExemptionValuationFragment
                    }
                    transitional {
                        ...assessmentAndExemptionValuationFragment
                    }
                }
                dimensions {
                    buildingDepthFeet
                    buildingFrontageFeet
                    factoryAreaGrossSquarefootage
                    garageAreaGrossSquarefootage
                    grossSquarefootage
                    hotelAreaGrossSquarefootage
                    loftAreaGrossSquarefootage
                    lotDepthFeet
                    lotFrontageFeet
                    officeAreaGrossSquarefootage
                    otherAreaGrossSquarefootage
                    residentialAreaGrossSquarefootage
                    retailAreaGrossSquarefootage
                    storageAreaGrossSquarefootage
                    totalLandAreaFeet
                    warehouseAreaGrossSquarefootage
                }
            }
            valuationAndAssessmentData {
                actualExemptLandTotal
                actualExemptLandValue
                actualLandValue
                actualTotalValue
                assessmentYear
                exceptionCodeOne
                marketValue
                numberOfStories
                transitionalExemptionLandTotal
                transitionalExemptionLandValue
                transitionalLandValue
                transitionalTotalValue
            }
        }
    }

    ${addressFragment}
    ${assessmentAndExemptionValuationFragment}
`;

// valuationAndAssessmentData {

// }
// housingMaintenanceCodeViolations {

// }
