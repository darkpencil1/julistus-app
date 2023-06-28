import styled from "styled-components";
import Row from "../baseComponents/Row.style";

const StyledMissionPromo = styled(Row)`
  margin: 0 10rem;
  justify-content: center;

  .mission__img-container {
    flex: 0 auto;
    width: ${(p) => p.theme.column.col_4};
    max-height: 70vh;
  }

  .mission__img {
    width: auto;
    height: 70vh;
  }

  .mission__text-container {
    flex: 0 auto;
    width: ${(p) => p.theme.column.col_5};
    text-align: center;
  }

  .mission__title {
    text-transform: uppercase;
  }

  .mission__text {
  }
`;

export default StyledMissionPromo;
