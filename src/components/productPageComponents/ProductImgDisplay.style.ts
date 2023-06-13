import Col from "../baseComponents/Col.style";
import styled from "styled-components";

const StyledProductImgDisplay = styled(Col)`
  width: ${(p) => p.theme.column.col_12};
  border-radius: ${(p) => p.theme.br.br_round};
  padding: ${(p) => p.theme.spacing.spacing_2}
    ${(p) => p.theme.column.spacing_4};
  background-color: rgb(237, 237, 237);
  height: 25rem;

  .product__img-row {
    margin: 0 ${(p) => p.theme.spacing.spacing_2};
    height: 100%;
  }
  .product__img-main-container {
    display: flex;
    width: ${(p) => p.theme.column.col_10};
    height: 100%;
    justify-content: center;
    align-items: center;
  }
  .product__img-main {
    max-height: 20rem;
  }
`;

export default StyledProductImgDisplay;
