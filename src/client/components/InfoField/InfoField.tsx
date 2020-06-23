import React from 'react';
import styled from '@emotion/styled';

interface IInfoField {
    className?: string;
    title: string;
    value?: JSX.Element | string | null;
}
export const InfoField: React.FC<IInfoField> = ({
    className,
    title,
    value,
}) => (
    <InfoFieldSectionWrapper className={className}>
        <InfoFieldTitle>{`${title}:`}</InfoFieldTitle>
        <InfoFieldValue>
            {value === null ? <i>'None specified'</i> : value}
        </InfoFieldValue>
    </InfoFieldSectionWrapper>
);

export const InfoFieldSectionWrapper = styled.div({
    display: 'flex',
    flexDirection: 'row',
});

export const InfoFieldTitle = styled.span({
    fontWeight: 'bold',
});

export const InfoFieldValue = styled.span({
    marginLeft: '5px',
});
