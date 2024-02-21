import styled from "styled-components";
import Row from "../../baseComponents/Row.style";

const StyledIntro = styled(Row)`
  flex-wrap: no-wrap;
  height: 90vh;

  @media (max-width: 1450px) {
    flex-wrap: wrap-reverse;
    justify-content: center;
    margin-top: 300px;
  }
`;

export default StyledIntro;
