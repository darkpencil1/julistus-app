import styled from "styled-components";
import { Orientation } from "../../resources/interfaces/ProductInterface";
import Col from "../baseComponents/Col.style";

type StyledReleaseProductProps = {
  orientation: Orientation;
};

//Base size is 500 x 500 px
const size = 400;
const ratio = 1.414;
const landscapeWidth = `${size}px`;
const portraitWidth = `${size / ratio}px`;

const StyledReleaseProduct = styled(Col)<StyledReleaseProductProps>`
  width: ${size + 400}px;
  max-width: ${size + 400}px;
  height: ${size + 100}px;
  border: 2px solid ${(p) => p.theme.colors.primary};
  border-radius: ${(p) => p.theme.br.br_medium};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(p) => p.theme.spacing.spacing_5};

  .release__container {
    flex-direction: ${(p) =>
      p.orientation === "landscape" ? "column" : "row"};
    flex-wrap: wrap;
    text-align: center;
  }

  .release__img {
    width: ${(p) =>
      p.orientation === "landscape" ? `${landscapeWidth}` : `${portraitWidth}`};
    height: auto;
    border-radius: ${(p) => p.theme.br.br_medium};
    margin: auto;
  }

  .release__text {
    width: auto;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-around;
  }

  .release__text > h1 {
    margin-top: ${(p) => (p.orientation === "portrait" ? 0 : "inherit")};
  }

  .release__btn {
    align-self: center;
  }
`;

export default StyledReleaseProduct;
