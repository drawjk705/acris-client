import { addDecorator } from '@storybook/react';
import styled from '@emotion/styled';

addDecorator((storyFn) => <Wrapper>{storyFn()}</Wrapper>);

const Wrapper = styled.div({
    margin: '100px',
});
