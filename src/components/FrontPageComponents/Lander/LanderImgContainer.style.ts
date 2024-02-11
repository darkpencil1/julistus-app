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
  margin-bottom: -100px;
  margin-left: -200px;

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

  .lander__product-img-parent--2 {
    margin-top: 500px;
    margin-left: -400px;
    order: 4;
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
`;

export default StyledLanderImgContainer;
