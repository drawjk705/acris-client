import React from 'react';
import styled from '@emotion/styled';

interface IInfoField {
    className?: string;
    title: string | null | undefined;
    value: string | null | undefined;
}
export const InfoField: React.FC<IInfoField> = ({
    className,
    title,
    value,
}) => (
    <InfoFieldSectionWrapper className={className}>
        <InfoFieldTitle>{title}</InfoFieldTitle>
        <InfoFieldValue>
            {`: ${value === null ? <i>'None specified'</i> : `${value}`}`}
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

export const InfoFieldValue = styled.span({});
