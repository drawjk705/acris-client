import React from 'react';
import styled from '@emotion/styled';
import { COLORS } from '../../styles/colors';

interface ICard {
    className?: string;
    header?: string;
}

export const Card: React.FC<ICard> = ({ className, header, children }) => (
    <StyledCard className={className}>
        {header && <Header className={className}>{header}</Header>}
        {children}
    </StyledCard>
);

const StyledCard = styled.div({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    boxShadow: '0.3em 0.3em 2em rgba(0,0,0,0.3)',
    padding: '20px',
    borderRadius: '5px',
});

const Header = styled.div({
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '5px',
    borderBottom: `1px solid ${COLORS.darkestBlue}`,
});
