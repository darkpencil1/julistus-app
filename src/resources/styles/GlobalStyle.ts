import { createGlobalStyle } from "styled-components";
import theme from "./theme";

type GlobalProps = {
  theme: typeof theme;
};

//Need type definitions
const GlobalStyle = createGlobalStyle<GlobalProps>`

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-size: ${(p) => p.theme.fontSize}
}

body {
  background-color: ${(p) => p.theme.colors.bg};
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.fontColor};
}

h1 {
  font-family: ${(props) => props.theme.ff.title};
  font-size: ${(p) => p.theme.fs.font_xxl}; 
}

h2 {
  font-family: ${(props) => props.theme.ff.title};
  font-size: ${(p) => p.theme.fs.font_xl}; 
}

h3 {
  font-family: ${(props) => props.theme.ff.primary};
  font-weight: ${(p) => p.theme.fw.fw_bold}; 
  font-size: ${(p) => p.theme.fs.font_lg}; 
}

a {
  font-weight: ${(p) => p.theme.fw.fw_semibold};
  color: ${(p) => p.theme.colors.primary};
}
`;

export default GlobalStyle;
