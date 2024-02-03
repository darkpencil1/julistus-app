import styled from "styled-components";

const StyledProductPage = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  /*Set height as 100vh - header height*/
  height: calc(100vh - 90px);

  .product__container {
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 1800px;
    max-height: 750px;
  }

  .product__img-container {
    width: ${(p) => p.theme.column.col_6};
    max-width: ${(p) => p.theme.column.col_6};
    max-height: 700px;
  }
`;

export default StyledProductPage;
