import styled from "styled-components";
//import heart from "../../../resources/images/sydän-ilman-viiva.png";
import heart from "../../../resources/images/sydän1.png";
import { motion } from "framer-motion";

export type StyledLinesProps = {
  size: number;
};

const StyledLines = styled(motion.svg)<StyledLinesProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  mask-image: url(${heart});
  mask-repeat: no-repeat;
  mask-size: ${(p) => `${p.size}px`};
`;

export default StyledLines;
