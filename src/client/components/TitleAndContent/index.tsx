import React from 'react';
import styled from '@emotion/styled';
import { FONT } from '../../styles/fonts';
import { IClassName } from '../../constants/classNameable';

type TContent = string | number | React.ReactNode;

export interface ITitleAndContent extends IClassName {
    title: string;
    content: TContent;
    transformContent?: (content: any) => TContent;
}

export const TitleAndContent: React.FC<ITitleAndContent> & {
    TitleSection: React.ReactNode;
    Content: React.ReactNode;
} = ({ title, content, transformContent, className }) => (
    <TitleAndContentWrapper className={className}>
        <TitleSection>
            <TitleBold>{title}</TitleBold>:
        </TitleSection>
        <Content>
            {transformContent ? transformContent(content) : content}
        </Content>
    </TitleAndContentWrapper>
);

export const OptionallyRenderedTitleAndContentSection = ({
    title,
    content,
    transformContent,
    className,
}: ITitleAndContent) =>
    content ? (
        <TitleAndContent
            className={className}
            title={title}
            content={content}
            transformContent={transformContent}
        />
    ) : null;

const TitleAndContentWrapper = styled.div({
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '3px',
});

const TitleSection = styled.span({
    marginRight: '3px',
});

const TitleBold = styled.span({
    font: FONT.RobotoBold,
});

const Content = styled.span({});

TitleAndContent.TitleSection = TitleSection;
TitleAndContent.Content = Content;
