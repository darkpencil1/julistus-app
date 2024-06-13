import styled from "styled-components";

const StyledCartItemList = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;

  .cart__item {
    display: flex;
    flex-direction: row;
    align-items: start;
    gap: 20px;
  }

  img {
    max-width: 200px;
    max-height: 200px;
  }
  .cart__item-text-container {
    display: flex;
    flex-direction: column;
    > h4 {
      margin: 0;
    }
    > p {
      margin: 0;
    }
  }
`;

export default StyledCartItemList;
