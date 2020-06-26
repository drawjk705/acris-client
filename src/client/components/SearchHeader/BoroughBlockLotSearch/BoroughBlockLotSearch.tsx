import React from 'react';
import styled from '@emotion/styled';
import { Formik, Form } from 'formik';
import { Borough } from '../../../__generated__/globalTypes';
import SearchIcon from '../../../assets/search-icon.svg';
import { uppercaseFirstLetters } from '../../../utils/uppercaseFirstLetters';
import { Dropdown, FormikDropdown } from '../../Dropdown/Dropdown';
import { Button } from '../../Button/Button';
import { Input } from '../../Input/Input';
import { COLORS } from '../../../styles/colors';

const stringifyBorough = (borough: Borough): string =>
    uppercaseFirstLetters(borough.replace('_', ' ')) as string;

const parametrizeBoroughString = (boroughString: string) =>
    boroughString.toUpperCase().replace(' ', '_');

type TValues = { borough: string; block: string; lot: string };

export const BoroughBlockLotSearch: React.FC = () => {
    const onSubmit = ({ borough, block, lot }: TValues) => {
        const queryString = `borough=${parametrizeBoroughString(
            borough
        )}&block=${block}&lot=${lot}`;
        window.location.replace(`/property?${queryString}`);
    };

    const initialValues = {
        borough: '',
        block: '',
        lot: '',
    };

    return (
        <BoroughBlockLotSearchWrapper>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <Form autoComplete={'off'}>
                    <FormWrapper>
                        <StyledFormikDropdown
                            name={'borough'}
                            initialCurrentValue={'Select a Borough'}
                            options={Object.values(Borough).map(
                                stringifyBorough
                            )}
                        />
                        <StyledInput
                            type={'pos-number'}
                            name={'block'}
                            placeholder={'Block'}
                        />
                        <StyledInput
                            type={'pos-number'}
                            name={'lot'}
                            placeholder={'Lot'}
                        />
                        <ButtonWrapper>
                            <StyledButton type={'submit'}>
                                <StyledSearchIcon />
                            </StyledButton>
                        </ButtonWrapper>
                    </FormWrapper>
                </Form>
            </Formik>
        </BoroughBlockLotSearchWrapper>
    );
};

const BoroughBlockLotSearchWrapper = styled.div({
    display: 'flex',
    flexDirection: 'row',
});

const FormWrapper = styled.div({
    display: 'flex',
    flexDirection: 'row',
});

const StyledFormikDropdown = styled(FormikDropdown)({
    width: '180px',
    margin: 'auto',
    marginRight: '5px',
});

const StyledInput = styled(Input)({
    marginLeft: '5px',
    marginRight: '5px',
    width: '70px',
});

const StyledSearchIcon = styled(SearchIcon)({
    fill: COLORS.darkestBlue,
});

const ButtonWrapper = styled.div({
    margin: 'auto',
    marginLeft: '5px',
});

const StyledButton = styled(Button)({
    padding: '0px',
    paddingTop: '10px',
    paddingLeft: '8px',
    width: '37px',
    height: '40px',
});
