import React, { useState } from 'react';
import styled from '@emotion/styled';
import ChevronDown from '../../assets/chevron-down.inline.svg';

interface ICollapsibleItem {
    title: string | JSX.Element;
    isAlreadyOpened?: boolean;
    expandedHeightPx: number;
}

export const CollapsibleItem: React.FC<ICollapsibleItem> = ({
    title,
    expandedHeightPx,
    children,
    isAlreadyOpened = false,
}) => {
    const [isOpened, setIsOpened] = useState(isAlreadyOpened);

    return (
        <CollapsibleItemWrapper
            expandedHeight={expandedHeightPx}
            isOpened={isOpened}
        >
            <TitleWrapper onClick={() => setIsOpened(!isOpened)}>
                {title} <StyledChevron />
            </TitleWrapper>
            <ContentWrapper>
                <ContentOpacityWrapper>{children}</ContentOpacityWrapper>
            </ContentWrapper>
        </CollapsibleItemWrapper>
    );
};

const CollapsibleItemWrapper = styled.div(
    ({
        isOpened,
        expandedHeight,
    }: {
        isOpened: boolean;
        expandedHeight: number;
    }) => ({
        display: 'flex',
        flexDirection: 'column',

        [`${StyledChevron}`]: isOpened && {
            transform: 'rotate(180deg)',
        },

        [`${ContentWrapper}`]: isOpened && {
            height: `${expandedHeight}px`,
            display: 'flex',
        },

        [`${ContentOpacityWrapper}`]: isOpened && {
            opacity: '1',
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
    width: '10px',
    opacity: '0.6',
    transition: 'transform 0.3s ease-in-out',
});

const ContentWrapper = styled.div({
    transitionTimingFunction:
        'cubic-bezier(0.895, 0.03, 0.685, 0.22) ease-in-out',
    transitionDuration: '0.5s',
    transitionProperty: 'height',
    height: '0px',
    display: 'none',
});

const ContentOpacityWrapper = styled.div({
    opacity: '0',
    transform: 'translateY(0)',
    transitionDelay: '0.2s',
    transitionTimingFunction: 'ease-in-out',
    transitionDuration: '0.2s',
    transitionProperty: 'opacity, transform',
    display: 'none',
});

export const CollapsibleItemComponents = {
    CollapsibleItemWrapper,
    Chevron: StyledChevron,
    TitleWrapper,
    ContentWrapper,
    ContentOpacityWrapper,
};
