import React, { useState, useRef, useCallback } from 'react';
import { useClickOutside } from './hooks/useClickOutside';
import styled from '@emotion/styled';
import { COLORS } from '../../styles/colors';
import { Button } from '../Button/Button';
import { FONT } from '../../styles/fonts';
import ChevronDown from '../../assets/chevron-down.svg';
import { IClassName } from '../../constants/classNameable';
import { useField } from 'formik';

interface IDropdown extends IClassName {
    initialCurrentValue: string;
    options: string[];
    onSelectOption?: <T extends string>(obj: T) => void;
}

export const FormikDropdown: React.FC<IDropdown & { name: string }> = (
    props
) => {
    const [field, meta, helpers] = useField(props);

    const handleSelectOption = useCallback(
        (option: string) => {
            field.value = option;
            field.checked = true;
            helpers.setValue(option);
        },
        [field, helpers]
    );

    return <Dropdown {...props} onSelectOption={handleSelectOption} />;
};

export const Dropdown: React.FC<IDropdown> = ({
    className,
    initialCurrentValue,
    options,
    onSelectOption,
}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [currentValue, setCurrentValue] = useState(initialCurrentValue);

    const ref = useRef(null);
    useClickOutside(ref, () => setIsDropdownOpen(false));

    const handleClickDropdownOption = useCallback(
        (option: string) => {
            setIsDropdownOpen(false);
            setCurrentValue(option);
            onSelectOption && onSelectOption(option);
        },
        [onSelectOption, setIsDropdownOpen]
    );

    return (
        <DropdownWrapper className={className} ref={ref}>
            <DropdownButton
                type={'button'}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
                <CurrentDropdownValue>{currentValue}</CurrentDropdownValue>
                <ChevronWrapper>
                    <ChevronDown />
                </ChevronWrapper>
            </DropdownButton>
            {isDropdownOpen && (
                <DropdownOptions>
                    {options.map((option) => (
                        <DropdownOption
                            key={option}
                            onClick={() => handleClickDropdownOption(option)}
                        >
                            {option}
                        </DropdownOption>
                    ))}
                </DropdownOptions>
            )}
        </DropdownWrapper>
    );
};

const DropdownWrapper = styled.div({
    display: 'flex',
    flexDirection: 'column',
    width: '180px',

    '>*': {
        width: '180px',
    },
});

const DropdownButton = styled(Button)({
    display: 'flex',
    flexDirection: 'row',
    padding: '0px',
    paddingRight: '5px',
    paddingLeft: '5px',
    width: '100%',
    borderRadius: '0px',
});

const CurrentDropdownValue = styled.span({
    font: FONT.RobotoBold,
    marginTop: 'auto',
    marginBottom: 'auto',
});

const ChevronWrapper = styled.div({
    marginLeft: 'auto',
    marginTop: '5px',
});

const DropdownOptions = styled.div({
    background: COLORS.white,
    color: COLORS.black,
    filter: 'drop-shadow(0 0 0.75rem grey)',
    position: 'absolute',
    transform: 'translateY(28px)',
});

const DropdownOption = styled.div({
    ':hover': {
        cursor: 'pointer',
        font: FONT.RobotoBold,
    },
    margin: '7px',
});
