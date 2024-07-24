import styled, { keyframes, css } from "styled-components";
import colors from "../../resources/styles/baseColors";

type MapSignProps = {
  size?: number;
  active: boolean;
  notRoundedSide: "left" | "right";
};

const defaultSize = 60;

const fadeIn = (color: string) => {
  return keyframes`
  from{
    background-color: transparent;
  }
  to{
    background-color: ${color};
  }
`;
};

const StyledMapSign = styled.div<MapSignProps>`
  width: ${(p) => (p.size ? p.size : defaultSize)}px;
  height: ${(p) => (p.size ? p.size : defaultSize)}px;
  position: relative;
  background-color: "transparent";
  border-radius: ${(p) =>
    p.notRoundedSide === "right"
      ? `${p.theme.br.br_medium} 0 0 ${p.theme.br.br_medium}`
      : `0 ${p.theme.br.br_medium} ${p.theme.br.br_medium} 0`};
  ${({ active }) =>
    active &&
    css`
      animation: ${fadeIn("white")} 2s linear;
      background-color: ${(p) => p.theme.colors.bg};
    `};

  .sign__circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${(p) => (p.size ? p.size - 5 : defaultSize - 5)}px;
    height: ${(p) => (p.size ? p.size - 5 : defaultSize - 5)}px;
    background-color: "transparent";
    border-radius: ${(p) => p.theme.br.br_full};
    display: flex;
    align-items: center;
    justify-content: center;
    ${({ active }) =>
      active &&
      css`
        animation: ${fadeIn(colors.primary)} 2s linear;
        background-color: ${(p) => p.theme.colors.primary};
      `}
  }
`;
export default StyledMapSign;
