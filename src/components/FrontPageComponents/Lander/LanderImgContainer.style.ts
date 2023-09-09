import styled from "styled-components";
import heart from "../../../resources/images/sydän-ilman-viiva.png";
import { motion } from "framer-motion";

const size = "700px";

const StyledLanderImgContainer = styled(motion.div)`
  position: relative;
  flex: 1 0;
  width: 100%;
  max-width: 100%;

  .lander__heart-container {
    position: relative;
  }

  .lander__heart {
    filter: drop-shadow(0 0 70px ${(p) => p.theme.colors.primary});
    width: ${size};
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
