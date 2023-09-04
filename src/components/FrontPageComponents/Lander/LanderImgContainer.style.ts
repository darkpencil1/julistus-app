import styled from "styled-components";
import { motion } from "framer-motion";

const size = "700px";

const StyledLanderImgContainer = styled(motion.div)`
  position: relative;
  flex: 1 0;
  width: 100%;
  max-width: 100%;

  .lander__img-main {
    filter: drop-shadow(0 0 70px ${(p) => p.theme.colors.primary});
    width: ${size};
  }
`;

export default StyledLanderImgContainer;
