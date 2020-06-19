import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { Redirect } from 'react-router';
import * as Yup from 'yup';
import { Input } from '../../../components/formHelpers/Input';
import { Routes } from '../../../routes';

const validationSchema = Yup.object({
    streetNumber: Yup.string().required(),
    streetName: Yup.string().required(),
});

type SearchBarProps = {
    streetNumber?: string;
    streetName?: string;
};

export const SearchBar: React.FC<SearchBarProps> = ({
    streetNumber = '',
    streetName = '',
}) => {
    const [searchInput, setSearchInput] = useState<SearchBarProps>();

    if (searchInput && searchInput.streetName && searchInput.streetNumber) {
        const queryString = `streetName=${encodeURIComponent(
            searchInput.streetName
        )}&streetNumber=${encodeURIComponent(searchInput.streetNumber)}`;
        return <Redirect to={`${Routes.PropertyResult.path}?${queryString}`} />;
    }

    return (
        <Formik
            validationSchema={validationSchema}
            initialValues={{ streetNumber, streetName }}
            onSubmit={(values) => setSearchInput(values)}
        >
            <Form>
                <Input.String
                    placeholder={'Street Number'}
                    name={'streetNumber'}
                />
                <Input.String placeholder={'Street Name'} name={'streetName'} />
                <button type='submit'>Search</button>
            </Form>
        </Formik>
    );
};
