import styled from "styled-components";
import Card from "../baseComponents/Card.style";

const content_gap = "10px";

const StyledProductItem = styled(Card)`
  flex: 1;
  height: auto;
  min-height: 400px;
  min-width: 750px;
  width: 750px;
  border-bottom: 5px solid ${(props) => props.theme.colors.gray};
  border-right: 5px solid ${(props) => props.theme.colors.gray};
  box-shadow: 0 0 10px ${(props) => props.theme.colors.gray};
  border-radius: 15px;
  padding: 0;

  .product__img-container {
    width: ${(p) => p.theme.column.col_6};
    max-height: 100%;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    border-radius: 15px 0 0 15px;
    background-color: ${(p) => p.theme.colors.white};
  }

  .product__img {
    object-fit: contain;
    max-width: 350px;
    max-height: 350px;
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
    justify-content: space-between;
    text-align: center;
    padding: 30px;
    border-radius: 0 15px 15px 0;
  }

  .product__text {
    margin: 0 auto 0;
  }

  .product__title {
    width: auto;
    margin: 0 auto ${(p) => p.theme.spacing.spacing_3};
  }

  .product__cta {
    margin: 0 auto;
  }
`;

export default StyledProductItem;
