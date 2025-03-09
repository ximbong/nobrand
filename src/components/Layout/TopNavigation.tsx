import React from 'react';
import styled from 'styled-components';
import { sidePaddings } from './lib';

const Container = styled.nav`
  ${sidePaddings}
  height: 64px;
`;

const TopNavigation = () => {
  return <Container>TopNavigation</Container>;
};

export { TopNavigation };
