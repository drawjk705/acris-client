import { addDecorator } from '@storybook/react';
import styled from '@emotion/styled';
import { GlobalTheme } from '../src/shared/GlobalTheme';

addDecorator((storyFn) => (
    <Wrapper>
        <GlobalTheme />
        {storyFn()}
    </Wrapper>
));

const Wrapper = styled.div({
    margin: '100px',
});
