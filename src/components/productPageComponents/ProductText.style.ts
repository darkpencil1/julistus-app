import styled from "styled-components";

const StyledProductText = styled.div`
  width: ${(p) => p.theme.column.col_5};
  max-height: 600px;

  .product__text-class {
    text-transform: capitalize;
    margin-bottom: 0px;
    margin-top: 0;
  }

  .product__text-desc {
    max-height: 500px;
    overflow-y: scroll;
  }

  > h2 {
    margin-top: 0;
  }
`;

export default StyledProductText;
