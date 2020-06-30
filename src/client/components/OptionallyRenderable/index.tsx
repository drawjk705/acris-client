import React from 'react';

interface IOptionallyRenderable<T, S extends keyof T> {
    optional: S;
    component: React.FC<T>;
    props: T;
}

export const OptionallyRenderable = <T, S extends keyof T>({
    optional,
    component: Component,
    props,
}: IOptionallyRenderable<T, S>) =>
    !!optional ? <Component {...props} /> : null;
