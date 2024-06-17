import styled from "styled-components";

const StyledCart = styled.div`
  .cart {
    margin: auto;
    margin-bottom: 100px;
    padding: 20px;
    background-color: ${(p) => p.theme.colors.white};
    min-width: 50%;
    max-width: 60%;
    border-bottom: 2px solid ${(props) => props.theme.colors.gray};
    border-right: 2px solid ${(props) => props.theme.colors.gray};
    box-shadow: 0 0 10px ${(props) => props.theme.colors.gray};
    border-radius: 15px;
    > h1 {
      margin: 0 0 40px 0;
    }
  }
  .cart__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: no-wrap;
    padding: 0 30px;
  }
  .cart__empty-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    > h3 {
      margin-top: 0;
    }
  }
`;

export default StyledCart;
