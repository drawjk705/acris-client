import styled from '@emotion/styled';
import {
    Field,
    Form as FormikForm,
    ErrorMessage as StyledErrorMessage,
} from 'formik';
import { COLORS } from '../../styles/colors';

type borderColorAnimationProps = {
    borderColor?: string;
    transitionDuration?: string;
    transitionTimingFunction?: string;
};
const borderColorAnimation = ({
    borderColor = 'black',
    transitionDuration = '0.4s',
    transitionTimingFunction = 'ease-in-out',
}: borderColorAnimationProps = {}) => ({
    borderColor: 'transparent',
    ':focus, :active': {
        borderColor,
        outline: 'transparent',
    },
    transitionProperty: 'border-color',
    transitionDuration,
    transitionTimingFunction,
});

export const Input = styled(Field)({
    fontSize: '15px',
    padding: '10px',
    borderRadius: '5px',
    ...borderColorAnimation(),
});

export const Form = styled(FormikForm)({
    autocomplete: 'off',
});

export const ErrorMessage = styled(StyledErrorMessage)({});

export const Button = styled.button({
    fontSize: '15px',
    padding: '10px',
    borderRadius: '5px',
    ...borderColorAnimation(),
});
