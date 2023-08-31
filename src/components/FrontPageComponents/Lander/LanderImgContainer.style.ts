import styled from "styled-components";
import Col from "../../baseComponents/Col.style";

const size = "700px";

const StyledLanderImgContainer = styled(Col)`
  position: relative;

  .lander__img-main {
    filter: drop-shadow(0 0 70px ${(p) => p.theme.colors.primary});
    width: ${size};
  }
`;

export default StyledLanderImgContainer;
