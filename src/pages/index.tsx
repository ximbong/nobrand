import React from 'react';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { Button } from '@radix-ui/themes';
import { Heading1, Heading4 } from '../components/Typography';

import '../styles/index.css';
import { mediaQueries } from '../styles/breakpoints';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  color: #111;
  color: white;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
  }
`;

const BackgroundImage = styled(GatsbyImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const HeroText = styled(Heading1)`
  margin-bottom: 1rem;
  z-index: 1;

  ${mediaQueries.aboveMobile} {
    font-size: 3rem;
  }
`;

const SubText = styled(Heading4)`
  line-height: 1.5;
  font-weight: 400;
  margin-bottom: 2rem;
  z-index: 1;
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
  z-index: 1;

  &:hover {
    background-color: black;
    color: white;
  }
`;

export const Head = () => <title>nobrand clothing</title>;

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      backgroundImage: file(relativePath: { eq: "landing-background.png" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            breakpoints: [480, 768, 1024, 1366, 1920]
          )
        }
      }
    }
  `);

  const image = getImage(data.backgroundImage) as IGatsbyImageData;

  return (
    <Container>
      <BackgroundImage image={image} alt="Background" />
      <HeroText $align="center">No labels. Just quality.</HeroText>
      <SubText $align="center">
        Premium, sustainable, brand-free essentials.
        <br />
        Comfortable T-shirt, designed to last.
      </SubText>
      <CTAButton onClick={() => (window.location.href = '/shop')}>Shop Now</CTAButton>
    </Container>
  );
};

export default IndexPage;
