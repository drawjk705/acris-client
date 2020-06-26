import React, { useState, ChangeEvent, useCallback } from 'react';
import styled from '@emotion/styled';
import { Field, FieldAttributes, useField } from 'formik';
import { makeTransition } from '../../styles/makeTransition';
import { COLORS } from '../../styles/colors';

interface IInput extends FieldAttributes<any> {
    type: 'string' | 'number' | 'pos-number';
    name: string;
    children?: never;
}

export const Input: React.FC<IInput> = ({
    type,
    value: initialValue = '',
    ...props
}) => {
    const [field, meta, helpers] = useField(props.name);

    field.onChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            if (
                (type === 'number' || type === 'pos-number') &&
                Number.isNaN(Number(e.target.value))
            ) {
                return;
            } else {
                if (type === 'pos-number' && Number(e.target.value) < 0) {
                    return;
                }

                field.value = e.target.value;
                helpers.setValue(e.target.value);
            }
        },
        [field, helpers]
    );

    return <StyledInput type={'string'} {...field} {...props} />;
};

const StyledInput = styled.input({
    fontSize: '15px',
    padding: '10px',
    borderRadius: '5px',
    height: '100%',
    borderColor: COLORS.darkestBlue,
    ':focus, :active': {
        borderColor: 'transparent',
        outline: 'transparent',
    },
    autocomplete: 'none',
    ...makeTransition({ transitionProperties: ['border-color'] }),
});
