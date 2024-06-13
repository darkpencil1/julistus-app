import styled from "styled-components";

const StyledCart = styled.div`
  .cart__container {
    margin: auto;
    padding: 20px;
    background-color: ${(p) => p.theme.colors.white};
    width: 90%;
    border-bottom: 2px solid ${(props) => props.theme.colors.gray};
    border-right: 2px solid ${(props) => props.theme.colors.gray};
    box-shadow: 0 0 10px ${(props) => props.theme.colors.gray};
    border-radius: 15px;
  }
`;

export default StyledCart;
