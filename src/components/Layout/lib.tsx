import { css } from 'styled-components';
import { mediaQueries } from '../../styles/breakpoints';

export const sidePaddings = css`
  padding: 0 1rem;

  ${mediaQueries.aboveMobile} {
    padding: 0 2rem;
  }
`;
