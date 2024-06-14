import styled from "styled-components";

const StyledCartSummary = styled.div`
  .cart__summary-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid ${(p) => p.theme.colors.primary};
    margin-bottom: 20px;

    > p {
      margin: 0;
    }
  }

  .cart__summary-row-title {
  }

  .cart__summary-row-price {
    font-weight: ${(p) => p.theme.fw.fw_bold};
  }
`;

export default StyledCartSummary;
