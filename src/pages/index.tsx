import React from 'react';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { Heading2, HeroText } from '../components/Typography';
import { mediaQueries } from '../styles/breakpoints';

import '../styles/global.css';
import { AltButton, PrimaryButton } from '../components/Button';
import { Layout } from '../components/Layout';

const Container = styled(Layout)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  height: 100dvh;
  color: white;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
  }
`;

const BackgroundImage = styled(GatsbyImage)`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const StyledHeroText = styled(HeroText)`
  margin-bottom: 1rem;
  z-index: 1;
`;

const SubText = styled(Heading2)`
  line-height: 1.5;
  font-weight: 400;
  margin-bottom: 3rem;
  z-index: 1;
  font-size: 1rem;

  ${mediaQueries.aboveMobile} {
    font-size: 1.25rem;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;

  > * {
    z-index: 1;
  }
`;

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      backgroundImage: file(relativePath: { eq: "landing-background.png" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            breakpoints: [768, 1366, 1920]
            formats: [AUTO, WEBP, AVIF]
            quality: 100
          )
        }
      }
    }
  `);

  const image = getImage(data.backgroundImage) as IGatsbyImageData;

  return (
    <Container noTopNavigation>
      <BackgroundImage image={image} alt="Background" />
      <StyledHeroText $align="center">No labels. Just quality.</StyledHeroText>
      <SubText $align="center">
        Premium, sustainable, brand-free essentials.
        <br />
        Comfortable T-shirt, designed to last.
      </SubText>
      <ButtonsContainer>
        <PrimaryButton to="/shop">Shop now</PrimaryButton>
        <AltButton to="/our-story">Our Story</AltButton>
      </ButtonsContainer>
    </Container>
  );
};

export default IndexPage;
