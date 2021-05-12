import { createGlobalStyle } from "styled-components";
import PTSansRegular from "./fonts/PTSans-Regular.ttf";
import PTSansBold from "./fonts/PTSans-Bold.ttf";
import PTSansItalic from "./fonts/PTSans-Italic.ttf";
import PTSansBoldItalic from "./fonts/PTSans-BoldItalic.ttf";

const GlobalStyle = createGlobalStyle`
  
  @font-face {
    font-family: "PT Sans";
    src: local("PT Sans"), url(${PTSansRegular}) format("truetype");
  }
  @font-face {
    font-family: "PT Sans Bold";
    src: local("PT Sans Bold"), url(${PTSansBold}) format("truetype");
  }
  @font-face {
    font-family: "PT Sans Italic";
    src: local("PT Sans Italic"), url(${PTSansItalic}) format("truetype");
  }
  @font-face {
    font-family: "PT Sans Bold-Italic";
    src: local("PT Sans Bold-Italic"), url(${PTSansBoldItalic}) format("truetype");
  }

  *{
    --floralWhite: hsl(46, 100%, 97%);
    --paleSilver: hsl(38, 16%, 76%);
    --blackOliveL: hsl(34, 6%, 30%);
    --blackOlive: hsl(34, 6%, 24%);
    --eerieBlack: hsl(40, 4%, 14%);
    --flame: hsl(17, 83%, 54%);
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */
  }

  body {
    margin: 0;
    padding: 0;
    background: var(--eerieBlack);
    color: var(--floralWhite);
    font-family: "PT Sans";
  }
`;

export default GlobalStyle;
