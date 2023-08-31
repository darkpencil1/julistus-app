import styled from "styled-components";
import Row from "../../baseComponents/Row.style";

const StyledLander = styled(Row)`
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: no-wrap;
  text-align: center;
  overflow: hidden;

  .lander__text-container {
    height: 90vh;
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: end;
    text-align: center;
  }
  .lander__text-container > p {
    width: 70%;
  }
  .lander__title {
    margin: 0;
  }
  .lander__subtitle {
    margin: 0;
  }
`;
export default StyledLander;
