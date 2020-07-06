import React, { useEffect, useState, useContext } from 'react';
import { TNavigationItem, NavigationContext } from '../NavigationContext';

export const useScrollTracking = () => {
    const {
        state: { refs },
    } = useContext(NavigationContext);

    const [sectionInView, setSectionInView] = useState(refs[0]?.header);

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;

            const refsInView = refs.filter(
                ({ ref }) => ref.current.offsetTop <= currentY
            );

            setSectionInView(refs[Math.max(0, refsInView.length - 1)]?.header);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [refs]);

    return { sectionInView };
};
