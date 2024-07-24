import styled from "styled-components";

const StyledCartItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  background-color: ${(p) => p.theme.colors.semidark_gray};
  padding: 20px;
  border-radius: 15px;

  .cart__item {
    display: flex;
    flex-direction: row;
    align-items: start;
    gap: 20px;
  }

  .cart__item:not(:first-of-type) {
    border-top: 1px solid ${(p) => p.theme.colors.primary};
    padding-top: 20px;
  }

  img {
    width: 120px;
  }
  .cart__item-text-container {
    display: flex;
    flex-direction: column;
    width: 300px;
    > h4 {
      position: relative;
      margin: 0;
      > a {
        cursor: pointer;
      }
    }
    > p {
      margin: 0;
    }
    .cart__item-price {
      font-weight: ${(p) => p.theme.fw.fw_bold};
    }
  }

  .cart__item-quantity-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .cart__item-remove {
    position: relative;
    cursor: pointer;
    align-self: end;

    /* Define the ::after pseudo-element */
    &::after {
      content: ""; /* Add content to the pseudo-element */
      position: absolute; /* Position it relative to the <a> element */
      left: 0; /* Align it with the left edge of the <a> element */
      bottom: 0; /* Place it at the bottom */
      width: 0; /* Initially, the width is 0 */
      height: 2px; /* Set the height to create the border effect */
      background-color: ${(p) =>
        p.theme.colors.primary}; /* Set the border color */
      transition: width 0.3s ease; /* Add a smooth transition for width */
    }

    /* Define the styles for the <a> element on hover */
    &:hover::after {
      width: 100%; /* Expand the width to 100% on hover */
    }
  }
`;

export default StyledCartItemList;
