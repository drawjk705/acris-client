import React from 'react';
import styled from '@emotion/styled';
import { COLORS } from '../../styles/colors';
import { makeTransition } from '../../styles/makeTransition';

type IButton = {
    className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<IButton> = ({
    className,
    children,
    ...props
}) => (
    <ButtonWrapper className={className} {...props}>
        {children}
    </ButtonWrapper>
);

const ButtonWrapper = styled.button({
    display: 'flex',
    flexDirection: 'row',
    fontSize: '15px',
    padding: '10px',
    borderRadius: '5px',
    borderColor: 'transparent',
    ':hover': {
        cursor: 'pointer',
        backgroundColor: COLORS.red,

        '*': {
            fill: COLORS.white,
            color: COLORS.white,
        },
    },
    ':focus, :active': {
        outline: 'transparent',
    },
});
