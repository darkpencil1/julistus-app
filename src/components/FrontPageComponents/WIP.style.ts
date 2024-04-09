import { motion } from "framer-motion";
import styled from "styled-components";

const StyledWIP = styled(motion.div)`
  width: 100%;
  height: 80px;
  padding: 10px;
  background-color: ${(p) => p.theme.colors.primary};
  color: ${(p) => p.theme.colors.secondary};
  text-align: start;

  p {
    margin: 0;
  }

  a {
    color: ${(p) => p.theme.colors.secondary};
    underline: 1px solid ${(p) => p.theme.colors.secondary};
  }
`;

export default StyledWIP;
