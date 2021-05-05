import React from "react";

import styled from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";

import GlobalStyle from "./globalStyles";
import Explorer from "./pages/explorer/Explorer";

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Content>
          <Explorer />
        </Content>
      </QueryClientProvider>
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
