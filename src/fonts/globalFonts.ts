import { createGlobalStyle } from "styled-components";
import PTSansRegular from "./PTSans-Regular.ttf";
import PTSansBold from "./PTSans-Bold.ttf";
import PTSansItalic from "./PTSans-Italic.ttf";
import PTSansBoldItalic from "./PTSans-BoldItalic.ttf";

const GlobalFonts = createGlobalStyle`
  
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
`;

export default GlobalFonts;
