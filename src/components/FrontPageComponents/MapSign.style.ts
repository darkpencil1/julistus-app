import styled from "styled-components";

type MapSignProps = {
  height?: number;
  active: boolean;
};

const mapSignSize = 60;

const StyledMapSign = styled.div<MapSignProps>`
  width: ${mapSignSize}px;
  height: ${mapSignSize}px;
  position: relative;
  background-color: ${(p) => (p.active ? p.theme.colors.bg : "transparent")};
  border-radius: ${(p) => p.theme.br.br_medium} 0 0
    ${(p) => p.theme.br.br_medium};

  .sign__circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${mapSignSize - 5}px;
    height: ${mapSignSize - 5}px;
    background-color: ${(p) =>
      p.active ? p.theme.colors.primary : "transparent"};
    border-radius: ${(p) => p.theme.br.br_full};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export default StyledMapSign;
