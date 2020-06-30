import gql from 'graphql-tag';
import {
    addressFragment,
    assessmentAndExemptionValuationFragment,
} from './fragments';

export const GET_PROPERTY_PREVIEW = gql`
    query PropertyPreview(
        $streetNumber: String
        $streetName: String
        $borough: Borough
        $block: Int
        $lot: Int
    ) {
        property(
            streetNumber: $streetNumber
            streetName: $streetName
            boroughBlockLot: { borough: $borough, block: $block, lot: $lot }
        ) {
            bble
            borough
            block
            lot
            streetNumber
            streetName
            propertyType {
                description
            }
            documents {
                legalDateRecorded
                id
                type {
                    classCodeDescription
                }
            }
        }
    }
`;

export const GET_PROPERTY = gql`
    query Property(
        $streetNumber: String
        $streetName: String
        $borough: Borough
        $block: Int
        $lot: Int
        $documentId: String
    ) {
        property(
            streetNumber: $streetNumber
            streetName: $streetName
            documentId: $documentId
            boroughBlockLot: { borough: $borough, block: $block, lot: $lot }
        ) {
            bble
            borough
            block
            lot
            streetNumber
            streetName
            unit
            propertyType {
                description
                propertyType
                recordType
            }
            documents {
                amount
                crfn
                dateOnDocument
                legalDateRecorded
                dateModified
                goodThroughDate
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
                year
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
            housingMaintenanceCodeViolations {
                apartment
                story
                inspectionDate
                originalCertifyByDate
                originalCorrectByDate
                newCertifyByDate
                newCorrectByDate
                orderNumber
                novDescription
                novIssuedDate
                currentStatus
                communityBoard
                violationStatus
            }
        }
    }

    ${addressFragment}
    ${assessmentAndExemptionValuationFragment}
`;
