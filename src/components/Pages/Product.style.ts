import styled from "styled-components";

const StyledProductPage = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  /*Set height as 100vh - header height*/
  height: calc(100vh - 90px);

  .product__container {
    height: 70%;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .product__img-container {
    width: ${(p) => p.theme.column.col_6};
    max-width: ${(p) => p.theme.column.col_6};
  }
`;

export default StyledProductPage;
