import gql from 'graphql-tag';

export const propertyTypeFragment = gql`
    fragment propertyType on PropertyType {
        description
        propertyType
        recordType
    }
`;

export const addressFragment = gql`
    fragment address on Address {
        addressLineOne
        addressLineTwo
        city
        state
        zipCode
    }
`;

export const partyFragment = gql`
    fragment party on Party {
        name
        documentId
        address {
            ...address
        }
    }

    ${addressFragment}
`;

export const documentFragment = gql`
    fragment document on Document {
        amount
        crfn
        date
        id
        parties {
            ...party
        }
        type
    }

    ${partyFragment}
`;

export const housingMaintenanceCodeViolationFragment = gql`
    fragment housingMaintenanceCodeViolation on HousingMaintenanceCodeViolation {
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
    fragment registrationContact on RegistrationContacts {
        businessAddress {
            ...address
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
    fragment hpdJurisdictionData on HpdJurisdictionData {
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
            ...registrationContact
        }
        registrationId
    }

    ${registrationContactFragment}
`;

export const assessmentAndExemptionViolationFragment = gql`
    fragment assessmentAndExemptionValuation on AssessmentAndExemptionValuation {
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
    fragment assessmentAndExemptionValuations on AssessmentAndExemptionValuations {
        actual {
            ...assessmentAndExemptionValuation
        }
        changeByNoticeActual {
            ...assessmentAndExemptionValuation
        }
        changeByNoticeMarket {
            ...assessmentAndExemptionValuation
        }
        changeByNoticeTaxable {
            ...assessmentAndExemptionValuation
        }
        changeByNoticeTransitional {
            ...assessmentAndExemptionValuation
        }
        currentActual {
            ...assessmentAndExemptionValuation
        }
        currentMarket {
            ...assessmentAndExemptionValuation
        }
        currentTaxable {
            ...assessmentAndExemptionValuation
        }
        currentTransitional {
            ...assessmentAndExemptionValuation
        }
        finalActual {
            ...assessmentAndExemptionValuation
        }
        finalMarket {
            ...assessmentAndExemptionValuation
        }
        finalTransitional {
            ...assessmentAndExemptionValuation
        }
        market {
            ...assessmentAndExemptionValuation
        }
        taxable {
            ...assessmentAndExemptionValuation
        }
        tentativeActual {
            ...assessmentAndExemptionValuation
        }
        tentativeMarket {
            ...assessmentAndExemptionValuation
        }
        tentativeTaxable {
            ...assessmentAndExemptionValuation
        }
        tentativeTransitional {
            ...assessmentAndExemptionValuation
        }
        transitional {
            ...assessmentAndExemptionValuation
        }
    }

    ${assessmentAndExemptionViolationFragment}
`;

export const taxClassDataFragment = gql`
    fragment taxClassData on TaxClassData {
        assessmentAndExemptionValuations {
            ...assessmentAndExemptionValuations
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
    fragment valuationAndAssessmentData on ValuationAndAssessmentData {
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
    fragment property on Property {
        bble
        block
        lot
        borough
        document {
            ...document
        }
        housingMaintenanceCodeViolations {
            ...housingMaintenanceCodeViolation
        }
        propertyType {
            ...propertyType
        }
        registrationId
        streetNumber
        streetName
        taxClassData {
            ...taxClassData
        }
        unit
        valuationAndAssessmentData {
            ...valuationAndAssessmentData
        }
    }

    ${propertyTypeFragment}
    ${documentFragment}
    ${housingMaintenanceCodeViolationFragment}
    ${taxClassDataFragment}
    ${valuationAndAssessmentDataFragment}
`;
