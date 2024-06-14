import styled from "styled-components";

const StyledCartItemList = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
  gap: 40px;
  background-color: ${(p) => p.theme.colors.semidark_gray};
  padding: 20px;
  border-radius: 15px;

  .cart__item {
    display: flex;
    flex-direction: row;
    align-items: start;
    gap: 20px;
    padding-bottom: 20px;
  }

  .cart__item:not(:last-of-type) {
    border-bottom: 1px solid ${(p) => p.theme.colors.primary};
  }

  img {
    width: 120px;
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
