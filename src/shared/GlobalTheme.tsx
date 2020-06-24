import React from 'react';
import { css, Global } from '@emotion/core';
import { FONT } from '../client/styles/fonts';

export const GlobalTheme: React.FC = () => (
    <Global
        styles={css({
            '*': { font: FONT.RobotoRegular },
        })}
    />
);
