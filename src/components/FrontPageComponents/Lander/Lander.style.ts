import styled from "styled-components";
import { motion } from "framer-motion";

const StyledLander = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto 100px auto;
  max-width: 2000px;

  .lander__text-container {
    height: 80vh;
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: end;
    text-align: center;
    /*Allow images come closer*/
    margin-right: -100px;
  }

  .lander__text-container > p {
    width: 80%;
    max-width: 900px;
  }

  .lander__title {
    margin: 0;
  }

  .lander__subtitle {
    margin: 0;
  }

  @media (max-width: 1600px) {
    flex-direction: column-reverse;
    gap: 50px;
  }
`;
export default StyledLander;
