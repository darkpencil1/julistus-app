import styled from "styled-components";

const StyledProductPage = styled.div`
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .product__container {
    margin: 0 0 1rem 2rem;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .product__img-container {
    width: ${(p) => p.theme.column.col_6};
    max-width: ${(p) => p.theme.column.col_6};
    max-height: 600px;
  }
`;

export default StyledProductPage;
