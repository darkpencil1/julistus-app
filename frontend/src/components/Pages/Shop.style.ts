import styled from "styled-components";

const StyledShop = styled.div`
  .product__wrapper {
    margin: ${(p) => p.theme.spacing.spacing_6}
      ${(p) => p.theme.spacing.spacing_7};
    gap: 100px;
    justify-content: center;
  }
`;

export default StyledShop;
