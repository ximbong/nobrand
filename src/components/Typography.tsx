import styled from 'styled-components';
import { mediaQueries } from '../styles/breakpoints';

const fontFamily = "'Montserrat', sans-serif";

const TypographyBase = styled.p<{
  $color?: string;
  $align?: string;
}>`
  font-family: ${fontFamily};
  margin: 0;
  padding: 0;
  color: ${({ $color }) => $color || 'inherit'};
  text-align: ${({ $align }) => $align || 'left'};
`;

const Heading1 = styled(TypographyBase).attrs({ as: 'h1' })`
  font-size: 1.75rem;
  font-weight: 700;

  ${mediaQueries.aboveMobile} {
    font-size: 2rem;
  }
`;

const Heading2 = styled(TypographyBase).attrs({ as: 'h2' })`
  font-size: 1.5rem;
  font-weight: 600;

  ${mediaQueries.aboveMobile} {
    font-size: 1.75rem;
  }
`;

const Heading3 = styled(TypographyBase).attrs({ as: 'h3' })`
  font-size: 1.25rem;
  font-weight: 600;

  ${mediaQueries.aboveMobile} {
    font-size: 1.5rem;
  }
`;

const Heading4 = styled(TypographyBase).attrs({ as: 'h4' })`
  font-size: 1rem;

  ${mediaQueries.aboveMobile} {
    font-size: 1.25rem;
  }
`;

const BodyText = styled(TypographyBase)`
  font-size: 0.875rem;
  font-weight: 400;

  ${mediaQueries.aboveMobile} {
    font-size: 1rem;
  }
`;

const SmallText = styled(TypographyBase)`
  font-size: 0.75rem;
  font-weight: 400;
  opacity: 0.8;

  ${mediaQueries.aboveMobile} {
    font-size: 0.875rem;
  }
`;

export { Heading1, Heading2, Heading3, Heading4, BodyText, SmallText };
