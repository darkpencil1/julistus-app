import styled from "styled-components";

const StyledCartQuantityOption = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  border: 2px solid ${(p) => p.theme.colors.primary};
  margin-left: 20px;
  > span {
    width: 30px;
    height: 30px;
    text-align: center;
    /*Prevent text highlighting*/
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
  }

  .cart__quantity-display {
    border-left: 1px solid ${(p) => p.theme.colors.primary};
    border-right: 1px solid ${(p) => p.theme.colors.primary};
  }

  .cart__quantity-btn {
    background-color: ${(p) => p.theme.colors.bg};
    font-size: ${(p) => p.theme.fs.font_md};
    font-weight: ${(p) => p.theme.fw.fw_semibold};
    cursor: pointer;
    &:hover {
      background-color: ${(p) => p.theme.colors.light_gray};
    }
  }

  .cart__quantity-btn--left {
    border-radius: 10px 0 0 10px;
  }

  .cart__quantity-btn--right {
    border-radius: 0 10px 10px 0;
  }
`;

export default StyledCartQuantityOption;
