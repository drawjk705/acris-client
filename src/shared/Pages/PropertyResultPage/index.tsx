import React from 'react';
import {
    PropertyVariables,
    Property_property,
    Property,
} from '../../../client/__generated__/Property';
import { GET_PROPERTY } from '../../../client/queries/getProperty';
import { useQuery } from '@apollo/react-hooks';
import { PropertyResult } from '../../../client/components/PropertyResult';

const isValidDocumentId = ({ documentId }: PropertyVariables) => !!documentId;

const boroughBlockLotIsValid = ({ block, lot }: PropertyVariables) =>
    Number.isInteger(Number(block)) && Number.isInteger(Number(lot));

const streetNumberAndNameAreValid = ({
    streetName,
    streetNumber,
}: PropertyVariables) => !!(streetName?.length && streetNumber?.length);

const receivedValidInput = (props: PropertyVariables) =>
    boroughBlockLotIsValid(props) ||
    streetNumberAndNameAreValid(props) ||
    isValidDocumentId(props);

const transformProps = ({
    borough,
    block,
    lot,
    ...props
}: PropertyVariables) => ({
    ...props,
    borough: borough,
    block: Number(block),
    lot: Number(lot),
});
export const PropertyResultPage: React.FC<PropertyVariables> = (props) => {
    const { data, loading, error } = useQuery<Property, PropertyVariables>(
        GET_PROPERTY,
        {
            variables: transformProps(props) as PropertyVariables,
            skip: !receivedValidInput(props),
        }
    );

    if (loading) {
        return <div>loading</div>;
    }

    if (error) {
        return <div>error</div>;
    }

    if (data) {
        const property: Property_property = data
            .property[0] as Property_property;

        return <PropertyResult {...property} />;
    }

    return <div>nothing</div>;
};
