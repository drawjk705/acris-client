import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

addons.setConfig({
    theme: create({
        // ...themes.normal,
        base: 'light',
        appContentBg: '#dde0e4',
    }),
});
