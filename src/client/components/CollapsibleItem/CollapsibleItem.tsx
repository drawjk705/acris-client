import React, { useState } from 'react';
import styled from '@emotion/styled';
import ChevronDown from '../../assets/chevron-down.svg';
import { IClassName } from '../../constants/classNameable';

interface ICollapsibleItem extends IClassName {
    title: string | JSX.Element;
    isAlreadyOpened?: boolean;
    expandedHeightPx: number;
}

export const CollapsibleItem: React.FC<ICollapsibleItem> = ({
    title,
    children,
    className,
    isAlreadyOpened = false,
}) => {
    const [isOpened, setIsOpened] = useState(isAlreadyOpened);

    return (
        <CollapsibleItemWrapper className={className} isOpened={isOpened}>
            <TitleWrapper onClick={() => setIsOpened(!isOpened)}>
                {title} <StyledChevron />
            </TitleWrapper>
            <ContentWrapper>{children}</ContentWrapper>
        </CollapsibleItemWrapper>
    );
};

const CollapsibleItemWrapper = styled.div(
    ({ isOpened }: { isOpened: boolean }) => ({
        display: 'flex',
        flexDirection: 'column',

        [`${StyledChevron}`]: isOpened && {
            transform: 'rotate(180deg)',
        },

        [`${ContentWrapper}`]: isOpened && {
            display: 'flex',
        },
    })
);

const TitleWrapper = styled.div({
    display: 'flex',
    flexDirection: 'row',
    ':hover': {
        cursor: 'pointer',
    },
});

const StyledChevron = styled(ChevronDown)({
    marginLeft: 'auto',
    opacity: '0.6',
});

const ContentWrapper = styled.div({
    display: 'none',
});

export const CollapsibleItemComponents = {
    CollapsibleItemWrapper,
    Chevron: StyledChevron,
    TitleWrapper,
    ContentWrapper,
};
