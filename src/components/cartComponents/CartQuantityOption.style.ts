import styled from "styled-components";

const StyledCartQuantityOption = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  border: 2px solid ${(p) => p.theme.colors.primary};
  > span {
    width: 30px;
    height: 30px;
    text-align: center;
  }

  .cart__quantity-display {
    border-left: 1px solid ${(p) => p.theme.colors.primary};
  }
  .cart__quantity-btn {
    background-color: ${(p) => p.theme.colors.bg};
    font-size: ${(p) => p.theme.fs.font_md};
  }
  .cart__quantity-btn--left {
    border-radius: 10px 0 0 10px;
  }

  .cart__quantity-btn--right {
    border-radius: 0 10px 10px 0;
  }
`;

export default StyledCartQuantityOption;
