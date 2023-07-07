import styled from "styled-components";

type MapLocationProps = {
  top: string;
  left: string;
};
const StyledMapLocation = styled.div<MapLocationProps>`
  position: absolute;
  top: ${(p) => p.top};
  left: ${(p) => p.left};

  .location__img {
    width: 400px;
    border-radius: 0 ${(p) => p.theme.br.br_medium}
      ${(p) => p.theme.br.br_medium};
    border: 1px solid ${(p) => p.theme.colors.bg};
  }

  .location__item-container {
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
  }
`;

export default StyledMapLocation;
