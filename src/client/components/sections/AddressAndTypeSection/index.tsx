import React from 'react';
import styled from '@emotion/styled';
import { Property_property_propertyType } from '../../../__generated__/Property';
import { FONT } from '../../../styles/fonts';
import { uppercaseFirstLetters } from '../../../utils/uppercaseFirstLetters';
import { TitleAndContent } from '../../TitleAndContent';
import { IClassName } from '../../../constants/classNameable';

export interface IAddressAndTypeSection extends IClassName {
    streetName: string | null;
    streetNumber: string | null;
    unit?: string | null;
    propertyType?: Property_property_propertyType | null;
}

export const AddressAndTypeSection: React.FC<IAddressAndTypeSection> = ({
    streetName,
    streetNumber,
    unit,
    propertyType,
    className,
}) => (
    <SectionWrapper className={className}>
        <Address
            className={className}
            streetName={uppercaseFirstLetters(streetName)}
            streetNumber={uppercaseFirstLetters(streetNumber)}
        />
        {unit && <TitleAndContent title={'Unit'} content={unit} />}
        {propertyType?.description && (
            <TitleAndContent
                title={'Property Type'}
                content={uppercaseFirstLetters(propertyType.description)}
            />
        )}
    </SectionWrapper>
);

const Address = ({
    streetName,
    streetNumber,
    className,
}: Pick<IAddressAndTypeSection, 'streetName' | 'streetNumber' | 'className'>) =>
    streetName ? (
        <SectionTitleWrapper className={className}>
            {`${streetNumber ? streetNumber + ' ' : ''}`}
            {streetName}
        </SectionTitleWrapper>
    ) : null;

const SectionWrapper = styled.div({
    display: 'flex',
    flexDirection: 'column',
});

export const SectionTitleWrapper = styled.div({
    display: 'flex',
    flexDirection: 'row',
    font: FONT.RobotoBold,
    fontSize: '20px',
    marginBottom: '10px',
});
