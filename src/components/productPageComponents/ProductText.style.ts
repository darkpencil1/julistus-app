import styled from "styled-components";

const StyledProductText = styled.div`
  width: ${(p) => p.theme.column.col_5};
  max-height: 600px;

  .product__text-class {
    text-transform: capitalize;
    margin-bottom: 0px;
    margin-top: 0;
  }

  .product__text-desc-container {
    max-height: calc(600px - 61px - 33px - 25px);
    overflow-y: scroll;
    margin-bottom: 0;
  }

  .product__text-primer {
    margin-top: 0;
    margin-bottom: 10px;
    font-style: italic;
  }

  > h2 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
`;

export default StyledProductText;
