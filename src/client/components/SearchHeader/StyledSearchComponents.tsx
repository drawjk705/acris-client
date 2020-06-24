import React from 'react';
import styled from '@emotion/styled';
import { Field, FormikErrors, FormikTouched } from 'formik';
import { makeTransition } from '../../styles/makeTransition';
import { COLORS } from '../../styles/colors';
import { FONT } from '../../styles/fonts';

export const Input = styled(Field)({
    fontSize: '15px',
    padding: '10px',
    borderRadius: '5px',
    borderColor: COLORS.darkestBlue,
    ':focus, :active': {
        borderColor: 'transparent',
        outline: 'transparent',
    },
    autocomplete: 'none',
    ...makeTransition({ transitionProperties: ['border-color'] }),
});

type ErrorMessageProps<T> = {
    className?: string;
    name: string;
    errors: FormikErrors<T>;
    touched: FormikTouched<T>;
    errorMessage: string;
};

export const ErrorMessage: <T extends { [key: string]: string }>(
    props: ErrorMessageProps<T>
) => React.ReactElement<ErrorMessageProps<T>> = ({
    className,
    name,
    errors,
    touched,
    errorMessage,
}) => {
    const hasError = !!errors[name] && !!touched[name];

    return (
        <ErrorMessageWrapper hasError={hasError} className={className}>
            {errorMessage}
        </ErrorMessageWrapper>
    );
};

const ErrorMessageWrapper = styled.span(
    ({ hasError }: { hasError: boolean }) => ({
        color: 'red',
        width: hasError ? '100%' : '0%',
        height: hasError ? '100%' : '0%',
        opacity: hasError ? 1 : 0,
        ...makeTransition({
            transitionProperties: ['opacity', 'width', 'height'],
        }),
        font: FONT.RobotoBold,
    })
);
