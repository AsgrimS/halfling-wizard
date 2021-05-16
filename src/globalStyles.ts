import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
  :root {
    scroll-behavior: smooth;
    --floralWhite: hsl(46, 100%, 97%);
    --paleSilver: hsl(38, 16%, 76%);
    --blackOliveL: hsl(34, 6%, 30%);
    --blackOlive: hsl(34, 6%, 24%);
    --eerieBlack: hsl(40, 4%, 14%);
    --flame: hsl(17, 83%, 54%);

    --backgroundColor: var(--eerieBlack);
    --fontColor: var(--paleSilver);
    
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */
    font-family: "PT Sans";
    color: var(--fontColor);
  }

  body {
    margin: 0;
    padding: 0;
    background-color: var(--backgroundColor);
  }
`;

export default GlobalStyle;
