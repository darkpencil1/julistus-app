import styled from "styled-components";
import Row from "../../baseComponents/Row.style";

const StyledIntro = styled(Row)`
  flex-wrap: nowrap;
  justify-content: center;
  height: 90vh;
  gap: 0;

  @media (max-width: 1450px) {
    flex-wrap: wrap-reverse;
    margin-top: 400px;
  }
`;

export default StyledIntro;
