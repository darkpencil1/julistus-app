import styled from "styled-components";
import Card from "../baseComponents/Card.style";

const content_gap = "10px";

const StyledProductItem = styled(Card)`
  flex: 1;
  min-height: 320px;
  min-width: 750px;
  width: 750px;
  max-width: 1000px;
  border-bottom: 2px solid ${(props) => props.theme.colors.gray};
  border-right: 2px solid ${(props) => props.theme.colors.gray};
  box-shadow: 0 0 10px ${(props) => props.theme.colors.gray};
  border-radius: 15px;
  padding: 0;
  background-color: ${(p) => p.theme.colors.bg};

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
    max-width: 300px;
    max-height: 300px;
    border-radius: ${(p) => p.theme.br.br_medium};
  }

  .product__img--tag {
    width: 300px;
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
    margin: 0 auto ${(p) => p.theme.spacing.spacing_1};
  }

  .product__title {
    width: auto;
    margin: 0 auto ${(p) => p.theme.spacing.spacing_2};
    font-size: ${(p) => p.theme.fs.font_lg};
  }

  .product__cta {
    margin: 0 auto;
  }
`;

export default StyledProductItem;
