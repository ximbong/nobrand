import React from 'react';
import styled from 'styled-components';
import { Button } from '@radix-ui/themes';
import { Heading1, Heading4 } from '../components/Typography';

import '../styles/index.css';
import background from '../assets/images/background.png';

import { mediaQueries } from '../styles/breakpoints';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  background-color: #f8f8f8;
  color: #111;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${background});
  background-size: cover;
  background-position: bottom;
  color: white;
`;

const HeroText = styled(Heading1)`
  margin-bottom: 1rem;

  ${mediaQueries.aboveMobile} {
    font-size: 3rem;
  }
`;

const SubText = styled(Heading4)`
  line-height: 1.5;
  font-weight: 400;
  margin-bottom: 2rem;
`;

const CTAButton = styled(Button)`
  background-color: white;
  color: black;
  padding: 12px 24px;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  font-family: 'Montserrat', sans-serif;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const IndexPage = () => {
  return (
    <Container>
      <HeroText align="center">No labels. Just quality.</HeroText>
      <SubText align="center">
        Premium, sustainable, brand-free essentials.
        <br />
        Comfortable T-shirt, designed to last.
      </SubText>
      <CTAButton onClick={() => (window.location.href = '/shop')}>Shop Now</CTAButton>
    </Container>
  );
};

export default IndexPage;
