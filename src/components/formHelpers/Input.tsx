import React from 'react';
import { useField } from 'formik';
import { InputProps } from './types';

const InputFactory: React.FC<InputProps> = ({ label, ...props }) => {
    const [field, meta] = useField({ ...props });

    return (
        <>
            {label && <label htmlFor={props.name}>{label}</label>}
            <input className={'text-input'} {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className='error'>{meta.error}</div>
            ) : null}
        </>
    );
};

export const Input = {
    Number: (props: Omit<InputProps, 'type'>) => (
        <InputFactory type={'number'} {...props} />
    ),
    String: (props: Omit<InputProps, 'type'>) => (
        <InputFactory type={'string'} {...props} />
    ),
};
