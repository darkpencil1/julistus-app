import styled, { keyframes, css } from "styled-components";

type MapLocationProps = {
  top: string;
  left: string;
  active: boolean;
  hasWideImg: boolean;
};

const spreadImage = (hasWideImg: boolean) => {
  return keyframes`
  from {
    width: 0;
  }
  to {
    width: ${hasWideImg ? "400px" : "250px"};
  }
`;
};
const StyledMapLocation = styled.div<MapLocationProps>`
  position: absolute;
  top: ${(p) => p.top};
  left: ${(p) => p.left};

  .location__img {
    display: ${(p) => (p.active ? "block" : "none")};
    border-radius: 0 ${(p) => p.theme.br.br_medium}
      ${(p) => p.theme.br.br_medium};
    border: 1px solid ${(p) => p.theme.colors.bg};
    ${({ hasWideImg }) =>
      css`
        animation: ${spreadImage(hasWideImg)} 1.5s linear forwards;
      `}
  }

  .location__item-container {
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
  }
`;

export default StyledMapLocation;
