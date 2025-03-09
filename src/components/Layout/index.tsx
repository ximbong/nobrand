import React from 'react';
import { TopNavigation } from './TopNavigation';
import styled from 'styled-components';
import { sidePaddings } from './lib';

type Props = {
  noTopNavigation?: boolean;
  children: React.ReactNode;
};

const MainContent = styled.main`
  ${sidePaddings}
`;

const Layout = ({ noTopNavigation, children, ...props }: Props) => {
  return (
    <>
      {!noTopNavigation && <TopNavigation />}
      <MainContent {...props}>{children}</MainContent>
    </>
  );
};

export { Layout };
