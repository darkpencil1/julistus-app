import { motion } from "framer-motion";
import styled from "styled-components";

type StyledWIPProps = {
  show: boolean;
};
const StyledWIP = styled(motion.div)<StyledWIPProps>`
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: ${(p) => p.theme.br.br_large};
  border: 2px solid ${(p) => p.theme.colors.primary};
  padding: 10px;
  width: ${(p) => (p.show ? "700px" : "fit-content")};
  background-color: ${(p) => p.theme.colors.bg};
  opacity: ${(p) => (p.show ? 1 : 0.5)};
  z-index: 1000;

  > span {
    float: right;
    cursor: pointer;
  }
`;

export default StyledWIP;
