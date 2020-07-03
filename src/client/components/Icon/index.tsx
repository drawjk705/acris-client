import React from 'react';
import { IClassName } from '../../constants/classNameable';

export interface IIcon
    extends IClassName,
        Omit<React.SVGProps<SVGSVGElement>, 'viewBox'> {}

interface _IIcon extends IIcon {
    viewBox: string;
}

export const Icon: React.FC<_IIcon> = ({
    className,
    viewBox,
    children,
    ...props
}) => (
    <svg className={className} viewBox={viewBox} {...props} {...svgStyles}>
        {children}
    </svg>
);

const svgStyles = {
    width: '1em',
    height: '1em',
};
