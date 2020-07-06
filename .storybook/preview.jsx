import { addDecorator } from '@storybook/react';
import styled from '@emotion/styled';
import { INITIAL_VIEWPORTS, DEFAULT_VIEWPORT } from '@storybook/addon-viewport';
import { addParameters } from '@storybook/client-api';
import { GlobalTheme } from '../src/shared/GlobalTheme';
import { breakpoints } from '../src/client/styles/breakpoints';

addParameters({
    viewport: {
        viewports: INITIAL_VIEWPORTS,
        defaultViewport: DEFAULT_VIEWPORT,
    },
});

addDecorator((storyFn) => (
    <Wrapper>
        <GlobalTheme />
        {storyFn()}
    </Wrapper>
));

const Wrapper = styled.div({
    [breakpoints.small]: {
        margin: '100px',
    },
});
