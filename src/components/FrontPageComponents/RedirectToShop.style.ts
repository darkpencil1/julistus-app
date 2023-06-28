import styled from "styled-components";
import Row from "../baseComponents/Row.style";

const StyledRedirectToShop = styled(Row)`
  height: 70vh;
  margin: 0 10rem;
  justify-content: center;
  align-items: center;
  gap: 6rem;

  .redirect__content-container {
    flex: 0 auto;
    flex-direction: column;
    width: ${(p) => p.theme.column.col_5};
    text-align: center;
  }

  .redirect__img-container {
    flex: 0 auto;
    width: ${(p) => p.theme.column.col_4};
    max-height: 70vh;
  }

  .redirect__img {
    width: auto;
    height: 70vh;
  }

  .redirect__text {
  }
`;

export default StyledRedirectToShop;
