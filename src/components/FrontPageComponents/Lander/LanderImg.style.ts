import styled from "styled-components";
import { Orientation } from "../../../resources/interfaces/ProductInterface";

export type StyledLanderImgProps = {
  top: number;
  left: number;
  orientation: Orientation;
  flexDirection: "row" | "column" | "row-reverse" | "column-reverse";
};

//Lander img is either 400px wide or tall, based on its orientation
const size = 350;
const ratio = 1.414;
const landscapeWidth = `${size}px`;
const portraitWidth = `${size / ratio}px`;

const StyledLanderImg = styled.div<StyledLanderImgProps>`
  /*
  position: absolute;
  top: ${(p) => p.top}px;
  left: ${(p) => p.left}px;
  */

  display: flex;
  flex-direction: ${(p) => p.flexDirection};
  gap: 30px;

  border-radius: ${(p) => p.theme.br.br_medium};

  .lander__product-img {
    width: ${(p) =>
      p.orientation === "landscape" ? `${landscapeWidth}` : `${portraitWidth}`};
    border-radius: ${(p) => p.theme.br.br_medium};
    height: auto;
  }
`;

export default StyledLanderImg;
