import styled from "styled-components";
import heart from "../../../resources/images/sydän-ilman-viiva.png";
import { motion } from "framer-motion";

const size = "700px";

const StyledLanderImgContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  flex: 1;
  width: 100%;
  max-width: 100%;

  .lander__product-img-parent--0 {
    order: 1;
    z-index: 1;
    margin-right: -30px;
  }

  .lander__product-img-parent--1 {
    margin-top: -150px;
    margin-left: -500px;
    order: 3;
    z-index: 1;
  }

  .lander__heart-container {
    order: 2;
    position: relative;
  }

  .lander__heart {
    filter: drop-shadow(0 0 70px ${(p) => p.theme.colors.primary});
    width: ${size};
    z-index: 0;
  }

  .lander__heart-line {
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: ${size};
    mask-image: url(${heart});
    mask-repeat: no-repeat;
    mask-size: ${size};
  }

  @media (max-width: 1850px) {
    /*Change the positioning of product img*/
    .lander__product-img--1 {
      left: 400px;
    }
  }

  @media (max-width: 1700px) {
    /*Change the positioning of product img*/
    .lander__product-img--1 {
      left: 350px;
      scale: 0.8;
    }
  }

  @media (max-width: 1400px) {
    scale: 0.8;

    /*Change the positioning of product img*/
    .lander__product-img--1 {
      left: 400px;
    }
  }
`;

export default StyledLanderImgContainer;
