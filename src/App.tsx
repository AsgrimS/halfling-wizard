import React from "react";

import GlobalStyle from "./globalStyles";
import Explorer from "./pages/explorer/Explorer";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Explorer />
    </>
  );
};

export default App;
