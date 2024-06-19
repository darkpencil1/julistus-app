import { motion } from "framer-motion";
import styled from "styled-components";

const StyledCartIcon = styled(motion.div)`
  background-color: ${(p) => p.theme.colors.primary};
  padding: 20px;
  width: 60px;
  height: 60px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;

  transition: box-shadow 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 0 8px ${(p) => p.theme.colors.primary};
  }

  .cart__icon {
    width: 40px;
    height: 40px;
  }
  .cart__icon-number {
    position: absolute;
    left: 50%;
    /*This positions number visually to center*/
    top: 57%;
    transform: translate(-50%, -50%);
    font-weight: ${(p) => p.theme.fw.fw_bold};
  }
`;

export default StyledCartIcon;
