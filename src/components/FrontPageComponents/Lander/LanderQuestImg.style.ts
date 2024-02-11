import { motion } from "framer-motion";
import styled from "styled-components";

const StyledLanderQuestImg = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: -120px;
  margin-right: -60px;
  border-radius: ${(p) => p.theme.br.br_medium};
  z-index: 1;

  > div:first-of-type {
    order: 2;
  }

  .lander__product-img {
    order: 3;
    width: 350px;
    border-radius: ${(p) => p.theme.br.br_medium};
  }

  .swarm__icon {
    height: 50px;
  }

  .swarm__icon-container--0 {
    order: 1;
    margin-right: -150px;
  }
  .swarm__icon-container--1 {
    order: 4;
    margin-left: -500px;
    margin-top: -300px;
  }

  .swarm__icon-container--2 {
    order: 5;
    margin-right: -20px;
    margin-top: 200px;
  }
`;

export default StyledLanderQuestImg;
