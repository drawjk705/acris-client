import React, { useMemo } from 'react';
import { Property_property_document_parties } from '../../__generated__/Property';
import { groupBy } from '../../utils/groupBy';
import { uppercaseFirstLetters } from '../../utils/uppercaseFirstLetters';
import { CollapsibleItem } from '../CollapsibleItem/CollapsibleItem';
import styled from '@emotion/styled';
import { Party } from './Party';

export type TPartyTypes = {
    partyOneType: string | null;
    partyTwoType: string | null;
    partyThreeType: string | null;
};

interface IParties {
    parties: Property_property_document_parties[];
    partyTypes: TPartyTypes;
}

export const Parties: React.FC<IParties> = ({
    parties,
    partyTypes: { partyOneType, partyTwoType, partyThreeType },
}) => {
    const partiesByType = useMemo(
        () =>
            Object.entries(groupBy(parties, { criterion: 'partyType' }))
                .sort(
                    ([partyType1, _], [partyType2, __]) =>
                        Number(partyType1) - Number(partyType2)
                )
                .map(([_, partiesByType]) => partiesByType),
        [parties]
    );

    const partyTypes = useMemo(
        () =>
            [partyOneType, partyTwoType, partyThreeType].filter(
                (partyType) => !!partyType
            ) as string[],
        [partyOneType, partyTwoType, partyThreeType]
    );

    return (
        <DocumentPartiesWrapper>
            {partiesByType.map((parties, i) => {
                const PartyType: React.FC = () => (
                    <PartyTypeWrapper>
                        {uppercaseFirstLetters(partyTypes[i])}
                    </PartyTypeWrapper>
                );

                return (
                    <StyledCollapsibleItem
                        key={i}
                        title={<PartyType />}
                        expandedHeightPx={60}
                    >
                        {parties.map((party) => (
                            <StyledParty
                                name={party.name}
                                {...party.address}
                                key={i}
                            />
                        ))}
                    </StyledCollapsibleItem>
                );
            })}
        </DocumentPartiesWrapper>
    );
};

const DocumentPartiesWrapper = styled.div({
    backgroundColor: 'white',
});

const PartyTypeWrapper = styled.div({
    fontSize: '18px',
    fontWeight: 'bolder',
    marginTop: '5px',
    marginBottom: '5px',
});

const StyledCollapsibleItem = styled(CollapsibleItem)({
    paddingBottom: '10px',
});

const StyledParty = styled(Party)({
    paddingLeft: '10px',
});
