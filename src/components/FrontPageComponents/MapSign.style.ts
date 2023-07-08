import styled, { keyframes, css } from "styled-components";
import colors from "../../resources/styles/baseColors";

type MapSignProps = {
  height?: number;
  active: boolean;
};

const mapSignSize = 60;

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
  width: ${mapSignSize}px;
  height: ${mapSignSize}px;
  position: relative;
  border-radius: ${(p) => p.theme.br.br_medium} 0 0
    ${(p) => p.theme.br.br_medium};
  background-color: "transparent";
  ${({ active }) =>
    active &&
    css`
      animation: ${fadeIn("white")} 2s linear;
      background-color: ${(p) => p.theme.colors.bg};
    `}

  .sign__circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${mapSignSize - 5}px;
    height: ${mapSignSize - 5}px;
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
