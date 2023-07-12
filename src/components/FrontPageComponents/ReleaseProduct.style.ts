import styled from "styled-components";
import { Orientation } from "../../resources/interfaces/ProductInterface";
import Col from "../baseComponents/Col.style";

type StyledReleaseProductProps = {
  orientation: Orientation;
};

//Base size is 500 x 500 px
const size = 500;
const ratio = 1.414;
const landscapeWidth = `${size}px`;
const portraitWidth = `${size / ratio}px`;

const StyledReleaseProduct = styled(Col)<StyledReleaseProductProps>`
  width: 500px;
  height: 500px;
  border: 2px solid ${(p) => p.theme.colors.primary};
  border-radius: ${(p) => p.theme.br.br_medium};

  .release__container {
    flex-direction: ${(p) =>
      p.orientation === "landscape" ? "column" : "row"};
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
  }

  .release__img {
    width: ${(p) =>
      p.orientation === "landscape" ? `${landscapeWidth}` : `${portraitWidth}`};
    height: auto;
    border-radius: ${(p) => p.theme.br.br_medium};
  }

  .release__text {
    width: 400px;
    margin: auto;
  }
  .release__btn {
    margin: auto;
  }
`;

export default StyledReleaseProduct;
