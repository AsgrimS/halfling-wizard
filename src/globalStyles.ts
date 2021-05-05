import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: var(--eerieBlack);
    color: var(--floralWhite);

    --floralWhite: hsl(46, 100%, 97%);
    --paleSilver: hsl(38, 16%, 76%);
    --blackOlive: hsl(34, 6%, 24%);
    --eerieBlack: hsl(40, 4%, 14%);
    --flame: hsl(17, 83%, 54%);
  }
`;

export default GlobalStyle;
