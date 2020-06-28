import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import styled from '@emotion/styled';
import { GET_PROPERTY_PREVIEW } from '../../../client/queries/getProperty';
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

export const PropertyPreviewsPage: React.FC<PropertyPreviewVariables> = (
    props
) => {
    const { loading, error, data } = useQuery<
        PropertyPreview,
        PropertyPreviewVariables
    >(GET_PROPERTY_PREVIEW, {
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
                        <StyledPropertyPreviewResult
                            key={i}
                            {...(property as PropertyPreview_property)}
                        />
                    ))}
            </div>
        );
    }

    return <div>nothing</div>;
};

const StyledPropertyPreviewResult = styled(PropertyPreviewResult)({
    margin: '35px',
});
