import styled from "styled-components";

const StyledCartIcon = styled.div`
  background-color: ${(p) => p.theme.colors.white};
  padding: 20px;
  width: 50px;
  height: 50px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  .cart__icon {
    position: relative;
    background-color: ${(p) => p.theme.colors.primary};
    width: 30px;
    height: 30px;
    border-radius: 100px;
    .cart__icon-number {
      position: absolute;
      bottom: 0px;
      left: 0px;
      color: red;
      width: 10px;
      height: 10px;
    }
  }
`;

export default StyledCartIcon;
