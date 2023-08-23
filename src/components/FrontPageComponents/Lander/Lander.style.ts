import styled from "styled-components";
import Row from "../../baseComponents/Row.style";

const StyledLander = styled(Row)`
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: no-wrap;
  text-align: center;

  .lander__text-container {
    height: 90vh;
    flex: 1;
  }
  .lander__title {
    margin-top: ${(p) => p.theme.spacing.spacing_7};
  }
  .lander__map-container {
    flex: 2;
  }

  .lander__map-mock {
    width: 100%;
    height: 90vh;
    background-color: ${(p) => p.theme.colors.primary};
    position: relative;
    overflow: hidden;
  }
`;
export default StyledLander;
