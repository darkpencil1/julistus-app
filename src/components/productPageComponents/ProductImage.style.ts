import { motion } from "framer-motion";
import styled from "styled-components";

const StyledProductImg = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
  width: 100%;
  border-radius: ${(p) => p.theme.br.br_round};

  .product__img {
    max-height: 15rem;
  }
`;

export default StyledProductImg;
