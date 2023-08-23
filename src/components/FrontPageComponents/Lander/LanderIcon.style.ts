import styled from "styled-components";
import StyledIcon from "../../baseComponents/Icon.style";

export type Size = "sm" | "md" | "lg";
type LanderIconProps = {
  top: number;
  left: number;
  size: Size;
};

const smSize = 60;
const mdSize = 80;
const lgSize = 100;
const iconModifier = 30;

const StyledLanderIcon = styled(StyledIcon)<LanderIconProps>`
  position: absolute;
  top: ${(p) => p.top}%;
  left: ${(p) => p.left}%;

  /* Conditionally set width and height based on the Size prop */
  width: ${(props) =>
    props.size === "sm"
      ? `${smSize}px`
      : props.size === "md"
      ? `${mdSize}px`
      : `${lgSize}px`};
  height: ${(props) =>
    props.size === "sm"
      ? `${smSize}px`
      : props.size === "md"
      ? `${mdSize}px`
      : `${lgSize}px`};

  .icon__main {
    width: ${(props) =>
      props.size === "sm"
        ? `${smSize - iconModifier}px`
        : props.size === "md"
        ? `${mdSize - iconModifier}px`
        : `${lgSize - iconModifier}px`};
    height: ${(props) =>
      props.size === "sm"
        ? `${smSize - iconModifier}px`
        : props.size === "md"
        ? `${mdSize - iconModifier}px`
        : `${lgSize - iconModifier}px`};
  }
`;

export default StyledLanderIcon;
