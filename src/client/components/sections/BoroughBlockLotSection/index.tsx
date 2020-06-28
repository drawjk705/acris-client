import React from 'react';
import styled from '@emotion/styled';
import { uppercaseFirstLetters } from '../../../utils/uppercaseFirstLetters';
import { TitleAndContent } from '../../TitleAndContent';

interface IBoroughBlockLotSection {
    borough: string;
    block: number;
    lot: number;
    bble: string;
}

export const BoroughBlockLotSection: React.FC<IBoroughBlockLotSection> = ({
    borough,
    block,
    lot,
    bble,
}) => (
    <SectionWrapper>
        <TitleAndContent
            title={'Borough'}
            content={uppercaseFirstLetters(borough)}
        />
        <TitleAndContent title={'Block'} content={block} />
        <TitleAndContent title={'Lot'} content={lot} />
        <TitleAndContent title={'BBLE'} content={bble} />
    </SectionWrapper>
);

const SectionWrapper = styled.div({
    display: 'flex',
    flexDirection: 'column',
});
