import styled from "styled-components";

const size = "700px";

const StyledLanderImgContainer = styled.div`
  position: relative;

  .lander__img-main {
    filter: drop-shadow(0 0 100px ${(p) => p.theme.colors.primary});
    width: ${size};
  }
`;

export default StyledLanderImgContainer;
