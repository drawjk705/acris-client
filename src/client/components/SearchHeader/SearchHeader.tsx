import React, { useState } from 'react';
import styled from '@emotion/styled';
import { AddressSearch } from './AddressSearch/AddressSearch';
import { COLORS } from '../../styles/colors';
import { SearchType } from './SearchType';
import { Dropdown } from '../Dropdown/Dropdown';
import { BoroughBlockLotSearch } from './BoroughBlockLotSearch/BoroughBlockLotSearch';

export const SearchHeader: React.FC = () => {
    const [searchType, setSearchType] = useState(SearchType.Address);

    return (
        <SearchHeaderWrapper>
            <DropdownWrapper>
                <StyledDropdown
                    initialCurrentValue={searchType}
                    options={Object.values(SearchType)}
                    onSelectOption={setSearchType}
                />
            </DropdownWrapper>
            <SearchBarWrapper>
                <AddressSearchSection searchType={searchType} />
                <BoroughBlockLotSearchSection searchType={searchType} />
            </SearchBarWrapper>
        </SearchHeaderWrapper>
    );
};

interface ISearchSection {
    searchType: string;
}

const AddressSearchSection: React.FC<ISearchSection> = ({ searchType }) =>
    searchType === SearchType.Address ? <AddressSearch /> : null;

const BoroughBlockLotSearchSection: React.FC<ISearchSection> = ({
    searchType,
}) =>
    searchType === SearchType.BoroughBlockLot ? (
        <BoroughBlockLotSearch />
    ) : null;

const SearchHeaderWrapper = styled.div({
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    backgroundColor: COLORS.darkestBlue,
    padding: '15px',
    position: 'fixed',
    top: '0px',
    left: '0px',
    zIndex: 99,
});

const DropdownWrapper = styled.div({
    margin: 'auto',
    width: '200px',
});

const StyledDropdown = styled(Dropdown)({
    width: '100%',
});

const SearchBarWrapper = styled.div({
    display: 'flex',
    width: '100%',
    margin: 'auto',
    marginLeft: '40px',
});
