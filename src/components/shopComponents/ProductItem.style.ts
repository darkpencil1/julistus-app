import styled from "styled-components";
import Col from "../baseComponents/Col.style";

const content_gap = "10px";

const StyledProductItem = styled.div`
  width: calc(${(p) => p.theme.column.col_6} - 15px);
  .product__img {
    width: ${(p) => p.theme.column.col_6};
  }
  .product__container {
    height: 300px;
    flex-direction: column;
  }

  .product__container:hover {
    box-shadow: 0px 0px 10px #cccccc;
    cursor: pointer;
  }

  .product__content-container {
    flex-direction: row;
    gap: ${content_gap};
  }

  .product__text-container {
    width: calc(${(p) => p.theme.column.col_6} - ${content_gap});
    flex-direction: column;
    justify-content: space-between;
  }

  .product__title {
    line-height: 1;
  }

  .product__cta {
    width: ${(p) => p.theme.column.col_6};
    margin-left: auto;
    margin-right: 0;
  }
`;

export default StyledProductItem;
