import { motion } from "framer-motion";
import styled from "styled-components";

const StyledProductImg = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15rem;
  width: 100%;

  border-radius: ${(p) => p.theme.br.br_round};
  padding: ${(p) => p.theme.spacing.spacing_2}
    ${(p) => p.theme.column.spacing_4};

  .product__img {
    max-height: 12rem;
  }
`;

export default StyledProductImg;
