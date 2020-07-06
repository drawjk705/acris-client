import React, { useCallback, useContext } from 'react';
import styled from '@emotion/styled';
import { IClassName } from '../../constants/classNameable';
import { FONT } from '../../styles/fonts';
import { useScrollTracking } from './hooks/useScrollTracking';
import { NavigationContext } from './NavigationContext';

interface ISidebar extends IClassName {}

export const Sidebar: React.FC<ISidebar> = ({ className }) => {
    const {
        state: { refs },
    } = useContext(NavigationContext);

    const { sectionInView } = useScrollTracking();

    const handleClickNavSection = useCallback(
        (ref: React.MutableRefObject<HTMLDivElement>) =>
            window.scrollTo(0, ref.current.offsetTop),
        []
    );

    return (
        <SidebarWrapper className={className}>
            {refs.map(
                ({ header, ref }, i) =>
                    ref && (
                        <SectionTitle
                            key={i}
                            onClick={() => handleClickNavSection(ref)}
                            sectionIsInView={
                                sectionInView === header ||
                                (!sectionInView && i === 0)
                            }
                        >
                            {header}
                        </SectionTitle>
                    )
            )}
        </SidebarWrapper>
    );
};

const SidebarWrapper = styled.div({
    display: 'flex',
    flexDirection: 'column',
});

const SectionTitle = styled.div(
    ({ sectionIsInView }: { sectionIsInView: boolean }) => ({
        display: 'flex',
        font: sectionIsInView ? FONT.RobotoBold : FONT.RobotoLight,
    })
);
