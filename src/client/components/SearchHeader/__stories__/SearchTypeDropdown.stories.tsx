import React from 'react';
import { SearchTypeDropdown, ISearchTypeDropdown } from '../SearchTypeDropdown';
import { SearchType } from '../SearchType';

export default { title: 'Components/Search Header' };

const defaultProps: ISearchTypeDropdown = {
    searchType: SearchType.Address,
    onClickOption: (option) => console.log(option),
};

export const searchTypeDropdown = () => (
    <SearchTypeDropdown {...defaultProps} />
);
