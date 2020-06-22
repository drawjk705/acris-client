import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_PROPERTY } from '../../queries/getProperty';
import { PropertyCard } from './PropertyCard';
import {
    PropertyVariables,
    Property,
    Property_property,
} from '../../__generated__/Property';

const boroughBlockLotIsValid = ({ boroughBlockLotInput }: PropertyVariables) =>
    Number.isInteger(boroughBlockLotInput?.borough) &&
    Number.isInteger(boroughBlockLotInput?.block) &&
    Number.isInteger(boroughBlockLotInput?.lot);

const streetNumberAndNameAreValid = ({
    streetName,
    streetNumber,
}: PropertyVariables) => !!(streetName?.length && streetNumber?.length);

const receivedValidInput = (props: PropertyVariables) =>
    boroughBlockLotIsValid(props) || streetNumberAndNameAreValid(props);

export const PropertyCardContainer: React.FC<PropertyVariables> = (props) => {
    const { loading, error, data } = useQuery<Property, PropertyVariables>(
        GET_PROPERTY,
        { variables: props, skip: !receivedValidInput(props) }
    );

    if (loading) {
        return <div>loading</div>;
    }

    if (error) {
        return <div>error</div>;
    }

    if (data && data.property) {
        return (
            <div>
                {data.property
                    .filter((property) => !!property)
                    .map((property, i) => (
                        <PropertyCard
                            key={i}
                            {...(property as Property_property)}
                        />
                    ))}
            </div>
        );
    }

    return <div>nothing</div>;
};
