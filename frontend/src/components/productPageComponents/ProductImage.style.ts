import { motion } from "framer-motion";
import styled from "styled-components";

const StyledProductImg = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  border-radius: ${(p) => p.theme.br.br_round};

  .product__img {
    align-self: center;
    max-width: 450px;
    max-height: 390px;
  }

  @media (min-width: 1500px) {
    .product__img {
      max-width: 600px;
    }
  }

  @media (max-width: 1300px) {
    .product__img {
      max-width: 400px;
    }
  }

  @media (max-height: 1100px) {
    .product__img {
      max-height: 390px;
    }
  }

  @media (max-height: 950px) {
    .product__img {
      max-height: 350px;
    }
  }
`;

export default StyledProductImg;
