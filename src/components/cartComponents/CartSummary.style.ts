import styled from "styled-components";

const StyledCartSummary = styled.div`
  .cart__summary-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;

    > p {
      margin: 0;
    }
  }

  .cart__summary-row:not(:last-of-type) {
    border-bottom: 1px solid ${(p) => p.theme.colors.primary};
  }

  .cart__summary-row-title--bold {
    font-weight: ${(p) => p.theme.fw.fw_semibold};
  }

  .cart__summary-row-price {
    font-weight: ${(p) => p.theme.fw.fw_bold};
  }
`;

export default StyledCartSummary;
