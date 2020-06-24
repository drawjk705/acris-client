import React, { useState, useRef, useCallback } from 'react';
import styled from '@emotion/styled';
import { SearchType } from './SearchType';
import ChevronDown from '../../assets/chevron.svg';
import { useClickOutside } from './hooks/useClickOutside';
import { Button } from '../Button/Button';
import { COLORS } from '../../styles/colors';

export interface ISearchTypeDropdown {
    searchType: SearchType;
    onClickOption: (searchType: SearchType) => void;
}

export const SearchTypeDropdown: React.FC<ISearchTypeDropdown> = ({
    searchType,
    onClickOption,
}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const ref = useRef(null);
    useClickOutside(ref, () => setIsDropdownOpen(false));

    const handleClickDropdownOption = useCallback(
        (option: SearchType) => {
            setIsDropdownOpen(false);
            onClickOption(option);
        },
        [onClickOption]
    );

    return (
        <SearchTypeDropdownWrapper>
            <SearchByButton onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                {`Search by ${searchType}`}
                <ChevronWrapper>
                    <ChevronDown />
                </ChevronWrapper>
            </SearchByButton>
            {isDropdownOpen && (
                <Dropdown>
                    {Object.entries(SearchType).map(
                        ([typeAsEnum, typeAsString]) => (
                            <DropdownOption
                                key={typeAsString}
                                onClick={() =>
                                    handleClickDropdownOption(
                                        typeAsEnum as SearchType
                                    )
                                }
                            >
                                {typeAsString}
                            </DropdownOption>
                        )
                    )}
                </Dropdown>
            )}
        </SearchTypeDropdownWrapper>
    );
};

const SearchTypeDropdownWrapper = styled.div({
    display: 'flex',
    flexDirection: 'column',
});

const ChevronWrapper = styled.div({
    marginLeft: '10px',
    marginTop: '2px',
});

const SearchByButton = styled(Button)({
    display: 'flex',
    flexDirection: 'row',
});

const Dropdown = styled.div({
    background: COLORS.white,
});

const DropdownOption = styled.div({
    ':hover': {
        cursor: 'pointer',
    },
});
