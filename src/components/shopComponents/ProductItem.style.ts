import styled from "styled-components";

const content_gap = "10px";

const StyledProductItem = styled.div`
  width: calc(${(p) => p.theme.column.col_6} - 15px);
  height: 300px;
  border: 2px solid ${(props) => props.theme.primary};
  border-radius: 5px;

  .product__container {
    display: flex;
    flex-direction: column;
    align-content: start;
    height: 100%;
  }

  .product__container:hover {
    cursor: pointer;
  }

  .product__img-container {
    width: ${(p) => p.theme.column.col_6};
    max-height: 100%;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
  }

  .product__img {
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
    border-radius: ${(p) => p.theme.br.br_medium};
  }

  .product__content-container {
    height: 100%;
    flex-direction: row;
    gap: ${content_gap};
  }

  .product__text-container {
    width: calc(${(p) => p.theme.column.col_6} - ${content_gap});
    flex-direction: column;
    justify-content: start;
  }

  .product__title {
    line-height: 1;
    font-weight: ${(p) => p.theme.fw.fw_semibold};
  }

  .product__cta {
    width: ${(p) => p.theme.column.col_6};
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: 0;
  }
`;

export default StyledProductItem;
