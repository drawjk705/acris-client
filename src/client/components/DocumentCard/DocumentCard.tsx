import React from 'react';
import styled from '@emotion/styled';
import { Property_property_document } from '../../__generated__/Property';
import { Card } from '../Card/Card';
import { InfoField } from '../InfoField/InfoField';
import { formatDollarAmount } from '../../utils/formatDollarAmount';
import { uppercaseFirstLetters } from '../../utils/uppercaseFirstLetters';
import { COLORS } from '../../styles/colors';
import { Parties } from './Parties';

export const DocumentCard: React.FC<Property_property_document> = ({
    amount,
    crfn,
    id,
    date,
    parties,
    type: { documentType, classCodeDescription, ...partyTypes },
}) => {
    return (
        <Card header='Document'>
            <StyledInfoField
                title={'Amount'}
                value={formatDollarAmount(amount)}
            />
            <StyledInfoField title={'CRFN'} value={crfn} />
            <StyledInfoField title={'ID'} value={id} />
            <StyledInfoField
                title={'Date'}
                value={Intl.DateTimeFormat('en-US').format(new Date(date))}
            />
            <StyledInfoField
                line-height={'20px'}
                title={'Type'}
                value={uppercaseFirstLetters(documentType)}
            />
            <StyledInfoField
                title={'Class Code Description'}
                value={uppercaseFirstLetters(classCodeDescription)}
            />
            <PartiesSection>
                <PartiesSubHeader>Parties</PartiesSubHeader>
                <Parties parties={parties || []} partyTypes={partyTypes} />
            </PartiesSection>
        </Card>
    );
};

const StyledInfoField = styled(InfoField)({
    lineHeight: '25px',
});

const PartiesSection = styled.div({
    marginLeft: '10px',
    marginTop: '10px',
});

const PartiesSubHeader = styled.div({
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: '20px',
    borderBottom: `1px solid ${COLORS.dropShadowGrey}`,
});
