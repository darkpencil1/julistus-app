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
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.fontColor};
}
`;

export default GlobalStyle;
