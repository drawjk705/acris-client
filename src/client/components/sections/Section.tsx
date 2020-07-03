import React from 'react';
import styled from '@emotion/styled';
import { FONT } from '../../styles/fonts';
import { COLORS } from '../../styles/colors';
import { IClassName } from '../../constants/classNameable';

interface ISection extends IClassName {
    component: React.FC<any>;
    props: any;
    propTest?: any;
    header: string;
}

export const Section: React.FC<ISection> & {
    Header: React.ReactNode;
    Content: React.ReactNode;
} = ({ className, props, propTest = {}, header, component: Component }) =>
    props && propTest ? (
        <SectionWrapper className={className}>
            <SectionHeader>{header}</SectionHeader>
            <SectionContent>
                <Component {...props} />
            </SectionContent>
        </SectionWrapper>
    ) : null;

const SectionWrapper = styled.div({
    marginTop: '10px',
    marginBottom: '5px',
});

const SectionHeader = styled.div({
    marginTop: '5px',
    marginBottom: '5px',
    font: FONT.RobotoBold,
    fontSize: '25px',
    borderBottom: `1px solid ${COLORS.grey}`,
    paddingBottom: '10px',
});

const SectionContent = styled.div({});

Section.Header = SectionHeader;
Section.Content = SectionContent;
