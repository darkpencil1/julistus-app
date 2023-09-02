import styled from "styled-components";
import bg from "../../resources/images/nappitausta.png";

export type Size = "sm" | "md" | "lg" | "xl";

type StyledIconProps = {
  size?: Size;
};

const smSize = 60;
const mdSize = 80;
const lgSize = 100;
const xlSize = 200;
const iconModifier = 20;

const StyledIcon = styled.div<StyledIconProps>`
  background-image: url(${bg});
  background-color: #cccccc; /* Used if the image is unavailable */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: ${(p) => (p.size === "xl" ? "7px" : "3px")} solid ${(p) =>
  p.theme.colors.primary_shadow};
  border-bottom: ${(p) => (p.size === "xl" ? "7px" : "3px")} solid ${(p) =>
  p.theme.colors.primary_shadow};
  border-radius: ${(p) =>
    p.size === "xl" ? p.theme.br.br_large : p.theme.br.br_medium};

  /* Conditionally set width and height based on the Size prop */
  ${({ size }) => {
    switch (size) {
      case "sm":
        return `
          height:  ${smSize}px;
          width:  ${smSize}px;
      `;
      case "md":
        return `
          height:  ${mdSize}px;
          width:  ${mdSize}px;
        `;
      case "lg":
        return `
          height:  ${lgSize}px;
          width:  ${lgSize}px;

      `;
      case "xl":
        return `
          height:  ${xlSize}px;
          width:  ${xlSize}px;
      `;
      default:
        return `
          height:  ${mdSize}px;
          width:  ${mdSize}px;
      `;
    }
  }}

  .icon__main {
  ${({ size }) => {
    switch (size) {
      case "sm":
        return `
          height:  ${smSize - iconModifier}px;
          width:  ${smSize - iconModifier}px;
      `;
      case "md":
        return `
          height:  ${mdSize - iconModifier}px;
          width:  ${mdSize - iconModifier}px;
        `;
      case "lg":
        return `
          height:  ${lgSize - iconModifier}px;
          width:  ${lgSize - iconModifier}px;

      `;
      case "xl":
        return `
          height:  ${xlSize - 2 * iconModifier}px;
          width:  ${xlSize - 2 * iconModifier}px;
      `;
      default:
        return `
          height:  ${mdSize - iconModifier}px;
          width:  ${mdSize - iconModifier}px;
      `;
    }
  }}
`;

export default StyledIcon;
