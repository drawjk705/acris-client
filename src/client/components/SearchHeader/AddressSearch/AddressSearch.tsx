import React from 'react';
import { Formik, Form } from 'formik';
import styled from '@emotion/styled';
import * as Yup from 'yup';
import { Input, ErrorMessage } from '../StyledSearchComponents';
import SearchIcon from '../../../assets/search-icon.svg';
import { Button } from '../../Button/Button';
import { makeTransition } from '../../../styles/makeTransition';
import { COLORS } from '../../../styles/colors';
import { IClassName } from '../../../constants/classNameable';

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
            `/property?streetNumber=${encodeURIComponent(
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
                {(props) => (
                    <Form autoComplete={'off'}>
                        <FormInnerWrapper className={className}>
                            <InputAndErrorWrapper className={className}>
                                <Input
                                    className={className}
                                    name={'streetNumber'}
                                    placeholder={'Street Number'}
                                />
                                <StyledErrorMessage
                                    {...props}
                                    className={className}
                                    errorMessage={'this field is required'}
                                    name={'streetNumber'}
                                />
                            </InputAndErrorWrapper>
                            <InputAndErrorWrapper>
                                <Input
                                    className={className}
                                    name={'streetName'}
                                    placeholder={'Street Name'}
                                />
                                <StyledErrorMessage
                                    {...props}
                                    className={className}
                                    errorMessage={'this field is required'}
                                    name={'streetName'}
                                />
                            </InputAndErrorWrapper>
                            <StyledButton className={className} type={'submit'}>
                                <StyledSearchIcon />
                            </StyledButton>
                        </FormInnerWrapper>
                    </Form>
                )}
            </Formik>
        </AddressSearchWrapper>
    );
};

const AddressSearchWrapper = styled.div({
    margin: 'auto',
});

const StyledErrorMessage = styled(ErrorMessage)({
    width: '100%',
    marginTop: '5px',
    marginLeft: '5px',
});

const InputAndErrorWrapper = styled.div({
    margin: '5px',
    display: 'flex',
    flexDirection: 'column',
});

const FormInnerWrapper = styled.div({
    display: 'flex',
    flexDirection: 'row',

    '*:first-child': {
        marginLeft: 'auto',
    },
    '*:last-child': {
        marginRight: 'auto',
    },
});

const StyledSearchIcon = styled(SearchIcon)({
    width: '1em',
    height: '1em',
    position: 'relative',
    top: '2px',
    fill: COLORS.white,
    ...makeTransition({
        transitionProperties: ['fill'],
        transitionDuration: '0.2s',
    }),
});

const StyledButton = styled(Button)({
    height: '50%',
    margin: '5px',
    ':active': {
        [`${StyledSearchIcon}`]: {
            fill: COLORS.darkestBlue,
        },
    },
});
