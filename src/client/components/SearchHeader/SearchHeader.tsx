import React, { useState } from 'react';
import styled from '@emotion/styled';
import { AddressSearch } from './AddressSearch/AddressSearch';
import { COLORS } from '../../styles/colors';
import { SearchType } from './SearchType';

export const SearchHeader: React.FC = () => {
    const [searchType, setSearchType] = useState(SearchType.Address);

    const searchTabs = (
        <SearchTabWrapper>
            {Object.entries(SearchType).map(([searchType, name]) => (
                <SearchTab
                    key={name}
                    onClick={() => setSearchType(searchType as SearchType)}
                >
                    {name}
                </SearchTab>
            ))}
        </SearchTabWrapper>
    );

    return (
        <>
            <SearchHeaderWrapper>
                {searchTabs}
                <SearchBarWrapper>
                    <AddressSearchSection searchType={searchType} />
                </SearchBarWrapper>
            </SearchHeaderWrapper>
        </>
    );
};

interface ISearchSection {
    searchType: SearchType;
}

const AddressSearchSection: React.FC<ISearchSection> = ({ searchType }) =>
    searchType === SearchType.Address ? <AddressSearch /> : null;

const SearchHeaderWrapper = styled.div({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: COLORS.darkestBlue,
});

const SearchTabWrapper = styled.div({
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '10px',
});

const SearchBarWrapper = styled.div({
    display: 'flex',
    width: '100%',
});

const SearchTab = styled.div({
    backgroundColor: COLORS.red,
    color: COLORS.white,
    border: `3px solid ${COLORS.white}`,
    padding: '10px',
});
