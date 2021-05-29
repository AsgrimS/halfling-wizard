import React from "react";

import GlobalStyle from "./globalStyles";
import GlobalFonts from "./fonts/globalFonts";
import Explorer from "./pages/explorer/Explorer";

const App: React.FC = () => {
  return (
    <div data-testid="app">
      <GlobalStyle />
      <GlobalFonts />
      <Explorer />
    </div>
  );
};

export default App;
