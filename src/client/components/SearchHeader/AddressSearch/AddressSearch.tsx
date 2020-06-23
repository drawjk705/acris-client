import React from 'react';
import { Formik } from 'formik';
import styled from '@emotion/styled';
import { Input, Form, Button } from '../StyledSearchComponents';
import SearchIcon from '../../../assets/search-icon.svg';

export const AddressSearch: React.FC = () => {
    const initialValues = {
        streetNumber: '',
        streetName: '',
    };

    const onSubmit = () => {};

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <Form>
                <StyledInput name={'streetNumber'} />
                <Input name={'streetName'} />
                <Button>
                    <SearchIcon />
                </Button>
            </Form>
        </Formik>
    );
};

const StyledInput = styled(Input)({
    margin: '10px',
});
