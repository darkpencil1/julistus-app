import styled from "styled-components";
import { motion } from "framer-motion";

const StyledLander = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: no-wrap;
  text-align: center;
  margin-bottom: 200px;

  .lander__text-container {
    height: 90vh;
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: end;
    text-align: center;
  }

  .lander__text-container > p {
    width: 80%;
  }

  .lander__title {
    margin: 0;
  }

  .lander__subtitle {
    margin: 0;
  }

  @media (max-width: 1400px) {
    .lander__text-container {
    }
  }
`;
export default StyledLander;
