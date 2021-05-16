import React from "react";

import GlobalStyle from "./globalStyles";
import GlobalFonts from "./fonts/globalFonts";
import Explorer from "./pages/Explorer";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <GlobalFonts />
      <Explorer />
    </>
  );
};

export default App;
