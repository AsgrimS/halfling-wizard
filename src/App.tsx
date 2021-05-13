import React from "react";

import styled from "styled-components";

import GlobalStyle from "./globalStyles";
import Explorer from "./pages/explorer/Explorer";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Content>
        <Explorer />
      </Content>
    </>
  );
};

export default App;

const Content = styled.div`
  height: 100vh;
  background-color: var(--blackOlive);
  margin-left: auto;
  margin-right: auto;
  min-width: 275px;
  max-width: 1000px;
`;
