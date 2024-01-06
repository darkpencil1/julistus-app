import styled from "styled-components";

const StyledProductText = styled.div`
  width: ${(p) => p.theme.column.col_5};

  .product__text-class {
    text-transform: capitalize;
    margin-bottom: 0px;
  }

  > h2 {
    margin-top: 0;
  }
`;

export default StyledProductText;
