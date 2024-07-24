import { motion } from "framer-motion";
import styled from "styled-components";

export type Size = "sm" | "md" | "lg" | "xl";

type StyledIconProps = {
  size?: Size;
};

const smSize = 60;
const mdSize = 80;
const lgSize = 100;
const xlSize = 130;

const StyledIcon = styled(motion.div)<StyledIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  /* Conditionally set width and height based on the Size prop */
  img {
    ${({ size }) => {
      switch (size) {
        case "sm":
          return `
          height:  ${smSize}px;
      `;
        case "md":
          return `
          height:  ${mdSize}px;
        `;
        case "lg":
          return `
          height:  ${lgSize}px;

      `;
        case "xl":
          return `
          height:  ${xlSize}px;
      `;
        default:
          return `
          height:  ${mdSize}px;
      `;
      }
    }}
  }
`;

export default StyledIcon;
