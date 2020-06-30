import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import { Property_property_documents_parties } from '../../../__generated__/Property';
import { groupBy } from '../../../utils/groupBy';
import { uppercaseFirstLetters } from '../../../utils/uppercaseFirstLetters';
import { CollapsibleItem } from '../../CollapsibleItem/CollapsibleItem';
import { PartySection } from './PartySection';
import { FONT } from '../../../styles/fonts';
import { IClassName } from '../../../constants/classNameable';
import { COLORS } from '../../../styles/colors';

interface IPartiesSection extends IClassName {
    parties: Property_property_documents_parties[];
    partyTypes: {
        partyOneType?: string | null;
        partyTwoType?: string | null;
        partyThreeType?: string | null;
    };
}

export const PartiesSection: React.FC<IPartiesSection> = ({
    className,
    parties,
    partyTypes: { partyOneType, partyTwoType, partyThreeType },
}) => {
    const partiesByTypes = useMemo(
        () =>
            Object.entries(groupBy(parties, { criterion: 'partyType' }))
                .sort(
                    ([typeA, _], [typeB, __]) => Number(typeA) - Number(typeB)
                )
                .map(([_, parties]) => parties),
        [parties]
    );

    const partyTypes = useMemo(
        () =>
            [partyOneType, partyTwoType, partyThreeType].filter(
                (partyType) => !!partyType
            ),
        [partyOneType, partyTwoType, partyThreeType]
    );

    return (
        <PartiesSectionWrapper className={className}>
            <PartiesSectionTitleWrapper>Parties</PartiesSectionTitleWrapper>
            {partiesByTypes.map((parties, partyTypeIndex) => {
                const PartyType: React.FC = () => (
                    <PartyTypeWrapper>
                        {uppercaseFirstLetters(partyTypes[partyTypeIndex])}
                    </PartyTypeWrapper>
                );

                return (
                    <StyledCollapsibleItem
                        key={partyTypeIndex}
                        title={<PartyType />}
                    >
                        <PartiesByTypeSection>
                            {parties.map((party, partyIndex) => (
                                <StyledPartySection
                                    name={party.name}
                                    {...party.address}
                                    key={partyIndex}
                                />
                            ))}
                        </PartiesByTypeSection>
                    </StyledCollapsibleItem>
                );
            })}
        </PartiesSectionWrapper>
    );
};

const PartiesSectionWrapper = styled.div({
    display: 'flex',
    flexDirection: 'column',
});

const PartiesSectionTitleWrapper = styled.div({
    display: 'flex',
    font: FONT.RobotoBold,
    fontStyle: 'italic',
    fontSize: '18px',
    borderBottom: `1px solid ${COLORS.grey}`,
    marginBottom: '12px',
});

const PartyTypeWrapper = styled.div({
    fontSize: '18px',
    fontWeight: 'bolder',
    marginBottom: '5px',
});

const StyledCollapsibleItem = styled(CollapsibleItem)({
    marginBottom: '10px',
});

const PartiesByTypeSection = styled.div({
    display: 'flex',
    flexDirection: 'column',
    '>*': {
        marginTop: '5px',
        marginBottom: '5px',
    },
});

const StyledPartySection = styled(PartySection)({
    paddingLeft: '10px',
});
