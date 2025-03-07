import React from 'react';
import styled from 'styled-components';
import { HeroText } from '../components/Typography';
import { SecondaryButton } from '../components/Button';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  height: 100dvh;
`;

const StyledHeroText = styled(HeroText)`
  margin-bottom: 2rem;
`;

export const Head = () => (
  <>
    <html lang="en" />
    <title>nobrand clothing</title>
    <meta name="description" content="Premium, sustainable, brand-free essentials" />
  </>
);

const Shop = () => (
  <Container>
    <StyledHeroText $align="center">
      We're working on it!
      <br />
      Our collection will be available soon.
    </StyledHeroText>
    <SecondaryButton to="/">To front page</SecondaryButton>
  </Container>
);

export default Shop;
