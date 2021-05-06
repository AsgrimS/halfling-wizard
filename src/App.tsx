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
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: var(--blackOlive);
  margin: 0 15rem 0 15rem;
`;
