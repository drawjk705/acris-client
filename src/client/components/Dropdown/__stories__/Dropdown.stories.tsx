import React from 'react';
import { Dropdown } from '../Dropdown';

export default { title: 'Components/Dropdown' };

const defaultProps = {
    initialCurrentValue: 'select an option...',
    options: ['option a', 'option b', 'option c'],
    onSelectOption: (opt: string | number) => console.log(opt),
};

export const dropdown = () => <Dropdown {...defaultProps} />;
