import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_PROPERTY } from '../../../client/queries/getProperty';
import {
    PropertyPreview,
    PropertyPreviewVariables,
    PropertyPreview_property,
} from '../../../client/__generated__/PropertyPreview';
import { PropertyPreviewResult } from '../../../client/components/PropertyPreviewResult';

const boroughBlockLotIsValid = ({ block, lot }: PropertyPreviewVariables) =>
    Number.isInteger(Number(block)) && Number.isInteger(Number(lot));

const streetNumberAndNameAreValid = ({
    streetName,
    streetNumber,
}: PropertyPreviewVariables) => !!(streetName?.length && streetNumber?.length);

const receivedValidInput = (props: PropertyPreviewVariables) =>
    boroughBlockLotIsValid(props) || streetNumberAndNameAreValid(props);

const transformProps = ({
    borough,
    block,
    lot,
    ...props
}: PropertyPreviewVariables) => ({
    ...props,
    borough: borough,
    block: Number(block),
    lot: Number(lot),
});

export const PropertyPreviews: React.FC<PropertyPreview> = (props) => {
    const { loading, error, data } = useQuery<
        PropertyPreview,
        PropertyPreviewVariables
    >(GET_PROPERTY, {
        variables: transformProps(props as PropertyPreviewVariables),
        skip: !receivedValidInput(props as PropertyPreviewVariables),
    });

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
                        <PropertyPreviewResult
                            key={i}
                            {...(property as PropertyPreview_property)}
                        />
                    ))}
            </div>
        );
    }

    return <div>nothing</div>;
};
