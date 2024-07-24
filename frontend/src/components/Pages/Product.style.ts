import styled from "styled-components";

const StyledProductPage = styled.div`
  /*Set height as 100vh - header height*/
  height: calc(100vh - 90px);
  margin-bottom: 100px;

  .product__wrapper {
    margin: auto;
    width: 95%;
    background-color: ${(p) => p.theme.colors.white};
    border-radius: ${(p) => p.theme.br.br_large};
    border-right: 2px solid ${(props) => props.theme.colors.primary};
    border-bottom: 2px solid ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 10px ${(props) => props.theme.colors.primary};

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 1rem;
    padding: 20px;
  }
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
