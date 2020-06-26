import React, { useEffect } from 'react';

export const useClickOutside = <T extends null | { contains: Function }>(
    ref: React.MutableRefObject<T>,
    callback: () => void
) => {
    useEffect(() => {
        const handleClickOutside = (event: Event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);
};
