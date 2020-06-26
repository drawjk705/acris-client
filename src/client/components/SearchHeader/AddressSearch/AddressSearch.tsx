import React from 'react';
import { Formik, Form } from 'formik';
import styled from '@emotion/styled';
import * as Yup from 'yup';
import SearchIcon from '../../../assets/search-icon.svg';
import { Button } from '../../Button/Button';
import { COLORS } from '../../../styles/colors';
import { IClassName } from '../../../constants/classNameable';
import { Input } from '../../Input/Input';

const addressSearchSchema = Yup.object().shape({
    streetNumber: Yup.string().required('this field is required'),
    streetName: Yup.string().required('this field is required'),
});

type TValues = {
    streetNumber: string;
    streetName: string;
};

export const AddressSearch: React.FC<IClassName> = ({ className }) => {
    const initialValues: TValues = {
        streetNumber: '',
        streetName: '',
    };

    const onSubmit = ({ streetNumber, streetName }: TValues) => {
        window.location.assign(
            `/property-previews?streetNumber=${encodeURIComponent(
                streetNumber
            )}&streetName=${encodeURIComponent(streetName)}`
        );
    };

    return (
        <AddressSearchWrapper>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={addressSearchSchema}
            >
                <Form autoComplete={'off'}>
                    <FormInnerWrapper className={className}>
                        <StyledInput
                            type={'string'}
                            className={className}
                            name={'streetNumber'}
                            placeholder={'Street Number'}
                        />
                        <StyledInput
                            type={'string'}
                            className={className}
                            name={'streetName'}
                            placeholder={'Street Name'}
                        />

                        <ButtonWrapper>
                            <StyledButton>
                                <StyledSearchIcon />
                            </StyledButton>
                        </ButtonWrapper>
                    </FormInnerWrapper>
                </Form>
            </Formik>
        </AddressSearchWrapper>
    );
};

const AddressSearchWrapper = styled.div({});

const FormInnerWrapper = styled.div({
    display: 'flex',
    flexDirection: 'row',
});

const StyledInput = styled(Input)({
    marginRight: '5px',
    marginLeft: '5px',
});

const StyledSearchIcon = styled(SearchIcon)({
    fill: COLORS.darkestBlue,
});

const ButtonWrapper = styled.div({
    margin: 'auto',
    marginLeft: '5px',
});

const StyledButton = styled(Button)({
    padding: '0px',
    paddingTop: '10px',
    width: '37px',
    height: '40px',
});
