import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { IClassName } from '../../constants/classNameable';
import { ChevronDown } from '../../assets/icons/ChevronDown';

interface ICollapsibleItem extends IClassName {
    title: string | JSX.Element;
    isAlreadyOpened?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const CollapsibleItem: React.FC<ICollapsibleItem> & {
    Title: React.ReactNode;
    Content: React.ReactNode;
} = ({ title, children, className, isAlreadyOpened = false }) => {
    const [isOpened, setIsOpened] = useState(isAlreadyOpened);

    useEffect(() => {
        if (isAlreadyOpened !== isOpened) {
            setIsOpened(isAlreadyOpened);
        }
    }, [isAlreadyOpened]);

    return (
        <CollapsibleItemWrapper className={className}>
            <TitleWrapper onClick={() => setIsOpened(!isOpened)}>
                {title} <StyledChevron isOpened={isOpened} />
            </TitleWrapper>
            <ContentWrapper isOpened={isOpened}>{children}</ContentWrapper>
        </CollapsibleItemWrapper>
    );
};

const CollapsibleItemWrapper = styled.div(() => ({
    display: 'flex',
    flexDirection: 'column',
}));

const TitleWrapper = styled.div({
    display: 'flex',
    flexDirection: 'row',
    ':hover': {
        cursor: 'pointer',
    },
});

const StyledChevron = styled(ChevronDown)(
    ({ isOpened }: { isOpened: boolean }) => ({
        marginLeft: 'auto',
        opacity: '0.6',
        transform: isOpened ? 'rotate(180deg)' : '',
        paddingTop: isOpened ? '0px' : '2px',
    })
);

const ContentWrapper = styled.div(({ isOpened }: { isOpened: boolean }) => ({
    display: isOpened ? 'flex' : 'none',
    flexDirection: 'column',
}));

export const CollapsibleItemComponents = {
    CollapsibleItemWrapper,
    Chevron: StyledChevron,
    TitleWrapper,
    ContentWrapper,
};

CollapsibleItem.Title = TitleWrapper;
CollapsibleItem.Content = ContentWrapper;
