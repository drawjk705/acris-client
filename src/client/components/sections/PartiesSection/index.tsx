import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import { Property_property_documents_parties } from '../../../__generated__/Property';
import { groupBy } from '../../../utils/groupBy';
import { uppercaseFirstLetters } from '../../../utils/uppercaseFirstLetters';
import { CollapsibleItem } from '../../CollapsibleItem/CollapsibleItem';
import { NameWithAddress } from '../../NameWithAddress';
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
            {partiesByTypes.map((parties, partyTypeIndex) => {
                return (
                    <StyledCollapsibleItem
                        key={partyTypeIndex}
                        title={uppercaseFirstLetters(
                            partyTypes[partyTypeIndex]
                        )}
                    >
                        <PartiesByTypeSection>
                            {parties.map((party, partyIndex) => (
                                <StyledNameWithAddress
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

const StyledCollapsibleItem = styled(CollapsibleItem)({
    [`${CollapsibleItem.Title}`]: {
        font: FONT.RobotoBold,
    },
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

const StyledNameWithAddress = styled(NameWithAddress)({
    paddingLeft: '10px',
});
