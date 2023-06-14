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
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.fontColor};
}
/* Margin classes */
.mt-1 {
  margin-top: ${(props) => props.theme.spacing.spacing_1};
}

.mr-1 {
  margin-right: ${(props) => props.theme.spacing.spacing_1};
}

.mb-1 {
  margin-bottom: ${(props) => props.theme.spacing.spacing_1};
}

.ml-1 {
  margin-left: ${(props) => props.theme.spacing.spacing_1};
}

.mx-1 {
  margin-left: ${(props) => props.theme.spacing.spacing_1};
  margin-right: ${(props) => props.theme.spacing.spacing_1};
}

.my-1 {
  margin-top: ${(props) => props.theme.spacing.spacing_1};
  margin-bottom: ${(props) => props.theme.spacing.spacing_1};
}

.mt-2 {
  margin-top: ${(props) => props.theme.spacing.spacing_2};
}

.mr-2 {
  margin-right: ${(props) => props.theme.spacing.spacing_2};
}

.mb-2 {
  margin-bottom: ${(props) => props.theme.spacing.spacing_2};
}

.ml-2 {
  margin-left: ${(props) => props.theme.spacing.spacing_2};
}

.mx-2 {
  margin-left: ${(props) => props.theme.spacing.spacing_2};
  margin-right: ${(props) => props.theme.spacing.spacing_2};
}

.my-2 {
  margin-top: ${(props) => props.theme.spacing.spacing_2};
  margin-bottom: ${(props) => props.theme.spacing.spacing_2};
}

.mt-3 {
  margin-top: ${(props) => props.theme.spacing.spacing_3};
}

.mr-3 {
  margin-right: ${(props) => props.theme.spacing.spacing_3};
}

.mb-3 {
  margin-bottom: ${(props) => props.theme.spacing.spacing_3};
}

.ml-3 {
  margin-left: ${(props) => props.theme.spacing.spacing_3};
}

.mx-3 {
  margin-left: ${(props) => props.theme.spacing.spacing_3};
  margin-right: ${(props) => props.theme.spacing.spacing_3};
}

.my-3 {
  margin-top: ${(props) => props.theme.spacing.spacing_3};
  margin-bottom: ${(props) => props.theme.spacing.spacing_3};
}

.mt-4 {
  margin-top: ${(props) => props.theme.spacing.spacing_4};
}

.mr-4 {
  margin-right: ${(props) => props.theme.spacing.spacing_4};
}

.mb-4 {
  margin-bottom: ${(props) => props.theme.spacing.spacing_4};
}

.ml-4 {
  margin-left: ${(props) => props.theme.spacing.spacing_4};
}

.mx-4 {
  margin-left: ${(props) => props.theme.spacing.spacing_4};
  margin-right: ${(props) => props.theme.spacing.spacing_4};
}

.my-4 {
  margin-top: ${(props) => props.theme.spacing.spacing_4};
  margin-bottom: ${(props) => props.theme.spacing.spacing_4};
}

/* Padding classes */
.pt-1 {
  padding-top: ${(props) => props.theme.spacing.spacing_1};
}

.pr-1 {
  padding-right: ${(props) => props.theme.spacing.spacing_1};
}

.pb-1 {
  padding-bottom: ${(props) => props.theme.spacing.spacing_1};
}

.pl-1 {
  padding-left: ${(props) => props.theme.spacing.spacing_1};
}

.px-1 {
  padding-left: ${(props) => props.theme.spacing.spacing_1};
  padding-right: ${(props) => props.theme.spacing.spacing_1};
}

.py-1 {
  padding-top: ${(props) => props.theme.spacing.spacing_1};
  padding-bottom: ${(props) => props.theme.spacing.spacing_1};
}

.pt-2 {
  padding-top: ${(props) => props.theme.spacing.spacing_2};
}

.pr-2 {
  padding-right: ${(props) => props.theme.spacing.spacing_2};
}

.pb-2 {
  padding-bottom: ${(props) => props.theme.spacing.spacing_2};
}

.pl-2 {
  padding-left: ${(props) => props.theme.spacing.spacing_2};
}

.px-2 {
  padding-left: ${(props) => props.theme.spacing.spacing_2};
  padding-right: ${(props) => props.theme.spacing.spacing_2};
}

.py-2 {
  padding-top: ${(props) => props.theme.spacing.spacing_2};
  padding-bottom: ${(props) => props.theme.spacing.spacing_2};
}

.pt-3 {
  padding-top: ${(props) => props.theme.spacing.spacing_3};
}

.pr-3 {
  padding-right: ${(props) => props.theme.spacing.spacing_3};
}

.pb-3 {
  padding-bottom: ${(props) => props.theme.spacing.spacing_3};
}

.pl-3 {
  padding-left: ${(props) => props.theme.spacing.spacing_3};
}

.px-3 {
  padding-left: ${(props) => props.theme.spacing.spacing_3};
  padding-right: ${(props) => props.theme.spacing.spacing_3};
}

.py-3 {
  padding-top: ${(props) => props.theme.spacing.spacing_3};
  padding-bottom: ${(props) => props.theme.spacing.spacing_3};
}

.pt-4 {
  padding-top: ${(props) => props.theme.spacing.spacing_4};
}

.pr-4 {
  padding-right: ${(props) => props.theme.spacing.spacing_4};
}

.pb-4 {
  padding-bottom: ${(props) => props.theme.spacing.spacing_4};
}

.pl-4 {
  padding-left: ${(props) => props.theme.spacing.spacing_4};
}

.px-4 {
  padding-left: ${(props) => props.theme.spacing.spacing_4};
  padding-right: ${(props) => props.theme.spacing.spacing_4};
}

.py-4 {
  padding-top: ${(props) => props.theme.spacing.spacing_4};
  padding-bottom: ${(props) => props.theme.spacing.spacing_4};
}

/* Add more margin and padding classes if needed */

/* ---------- FONT ---------- */
/* font weights */
.fw-light {
  font-weight: 300;
}

.fw-regular {
  font-weight: 400;
}

.fw-bold {
  font-weight: 700;
}

/* ---------- BORDER RADIUS ---------- */

.br-small {
  border-radius: 4px;
}

.br-medium {
  border-radius: 8px;
}

.br-large {
  border-radius: 12px;
}

.br-full {
  border-radius: 50%;
}

/* ---------- FLEX ---------- */

/*COLUMN DEFINITIONS*/
.col-1 {
  width: calc(100%/12)
}
.col-2 {
  width: calc((100% / 12) * 2)
}
.col-3 {
  width: calc((100% / 12) * 3)
}
.col-4 {
  width: calc((100% / 12) * 4)
}
.col-5 {
  width: calc((100% / 12) * 5)
}
.col-6 {
  width: calc((100% / 12) * 6)
}
.col-7 {
  width: calc((100% / 12) * 7)
}
.col-8 {
  width: calc((100% / 12) * 8)
}
.col-9 {
  width: calc((100% / 12) * 9)
}
.col-10 {
  width: calc((100% / 12) * 10)
}
.col-11 {
  width: calc((100% / 12) * 11)
}
.col-12 {
  width: 100% 
}

/*FLEX PROPERTIES*/

.flex {
  display: flex;
}

.flex.row {
  flex-direction: row;
}

.flex.row-reverse {
  flex-direction: row-reverse;
}

.flex.column {
  flex-direction: column;
}

.flex.column-reverse {
  flex-direction: column-reverse;
}

/* Align items */
.flex.align {
  align-items: center;
}

.flex.align-start {
  align-items: flex-start;
}

.flex.align-end {
  align-items: flex-end;
}

.flex.align-baseline {
  align-items: baseline;
}

.flex.align-stretch {
  align-items: stretch;
}

/* Justify items */
.flex.justify {
  justify-content: center;
}

.flex.justify-start {
  justify-content: flex-start;
}

.flex.justify-end {
  justify-content: flex-end;
}

.flex.justify-space-between {
  justify-content: space-between;
}

.flex.justify-space-around {
  justify-content: space-around;
}

.flex.justify-space-evenly {
  justify-content: space-evenly;
}
`;

export default GlobalStyle;
