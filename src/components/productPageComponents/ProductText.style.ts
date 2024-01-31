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
    /*Calc height as full height of container - title height - product class height - desc own margin top*/
    max-height: calc(600px - 61px - 33px - 25px);
    overflow-y: scroll;
    margin-bottom: 0;
  }

  > h2 {
    margin-top: 0;
  }
`;

export default StyledProductText;
