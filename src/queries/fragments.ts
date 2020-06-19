import gql from 'graphql-tag';

export const propertyTypeFragment = gql`
    fragment propertyTypeFragment on PropertyType {
        description
        propertyType
        recordType
    }
`;

export const addressFragment = gql`
    fragment addressFragment on Address {
        addressLineOne
        addressLineTwo
        city
        state
        zipCode
    }
`;

export const partyFragment = gql`
    fragment partyFragment on Party {
        name
        documentId
        address {
            ...addressFragment
        }
    }

    ${addressFragment}
`;

export const documentFragment = gql`
    fragment documentFragment on Document {
        amount
        crfn
        date
        id
        parties {
            ...partyFragment
        }
        type
    }

    ${partyFragment}
`;

export const housingMaintenanceCodeViolationFragment = gql`
    fragment housingMaintenanceCodeViolationFragment on HousingMaintenanceCodeViolation {
        apartment
        communityBoard
        currentStatus
        inspectionDate
        newCertifyByDate
        newCorrectByDate
        novDescription
        novIssuedDate
        orderNumber
        originalCertifyByDate
        originalCorrectByDate
        story
        violationStatus
    }
`;

export const registrationContactFragment = gql`
    fragment registrationContactFragment on RegistrationContacts {
        businessAddress {
            ...addressFragment
        }
        contactDescription
        corporationName
        firstName
        lastName
        middleInitial
        title
        type
    }

    ${addressFragment}
`;

export const hpdJurisdictionDataFragment = gql`
    fragment hpdJurisdictionDataFragment on HpdJurisdictionData {
        buildingId
        communityBoardId
        lifecycleStage
        managementProgram
        numberOfApartments
        numberOfLegalStories
        numberOfRooms
        recordStatus
        recordStatusId
        registrationContacts {
            ...registrationContactFragment
        }
        registrationId
    }

    ${registrationContactFragment}
`;

export const assessmentAndExemptionViolationFragment = gql`
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

export const assessmentAndExemptionViolationsFragment = gql`
    fragment assessmentAndExemptionValuationsFragment on AssessmentAndExemptionValuations {
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

    ${assessmentAndExemptionViolationFragment}
`;

export const taxClassDataFragment = gql`
    fragment taxClassDataFragment on TaxClassData {
        assessmentAndExemptionValuations {
            ...assessmentAndExemptionValuationsFragment
        }
        buildingConstructionYear
        coopApartmentCount
        coopIdNumber
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
        hasExtension
        storyCount
        unitCount
        zoningCode
    }

    ${assessmentAndExemptionViolationsFragment}
`;

export const valuationAndAssessmentDataFragment = gql`
    fragment valuationAndAssessmentDataFragment on ValuationAndAssessmentData {
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
`;

export const propertyFragment = gql`
    fragment propertyFragment on Property {
        bble
        block
        lot
        borough
        document {
            ...documentFragment
        }
        housingMaintenanceCodeViolations {
            ...housingMaintenanceCodeViolationFragment
        }
        propertyType {
            ...propertyTypeFragment
        }
        registrationId
        streetNumber
        streetName
        taxClassData {
            ...taxClassDataFragment
        }
        unit
        valuationAndAssessmentData {
            ...valuationAndAssessmentDataFragment
        }
    }

    ${propertyTypeFragment}
    ${documentFragment}
    ${housingMaintenanceCodeViolationFragment}
    ${taxClassDataFragment}
    ${valuationAndAssessmentDataFragment}
`;
