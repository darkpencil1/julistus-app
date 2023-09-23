import styled from "styled-components";
import { motion } from "framer-motion";

export type ButtonSize = "sm" | "md" | "lg" | "xl";
export type ButtonType = "primary" | "secondary" | "wip";

type StyledButtonProps = {
  size?: ButtonSize;
  btnType?: ButtonType;
};

const StyledButton = styled(motion.button)<StyledButtonProps>`
  display: inline-flex;
  width: fit-content;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  border: 5px solid
    ${(p) =>
      p.btnType === "secondary" ? p.theme.colors.secondary : "transparent"};
  border-radius: ${(p) =>
    p.btnType === "primary" ? p.theme.br.br_medium : p.theme.br.br_full};
  background-color: ${(p) => p.theme.colors.primary};
  color: ${(p) => p.theme.colors.secondary};
  font-weight: ${(p) => p.theme.fw.fw_bold};
  font-size: ${(p) => p.theme.fs.fs_xl};
  font-size: 1.5rem;
  line-height: 1rem;
  z-index: 2;

  /*Effects*/
  &:active {
    background-color: ${(p) => p.theme.colors.primary};
    text-shadow: 0 0 20px ${(p) => p.theme.colors.red};
  }
  /* Size-specific font sizes*/
  ${({ size, theme }) => {
    switch (size) {
      case "sm":
        return `
          font-size: ${theme.fs.font_sm};
          padding: ${theme.spacing.spacing_3} ${theme.spacing.spacing_5};
      `;
      case "md":
        return `
          font-size: ${theme.fs.font_md};
          padding: ${theme.spacing.spacing_1} ${theme.spacing.spacing_4};
        `;
      case "lg":
        return `
          font-size: ${theme.fs.fs_lg};
          padding: ${theme.spacing.spacing_3} ${theme.spacing.spacing_4};

      `;
      case "xl":
        return `
          font-size: ${theme.fs.fs_xl};
          padding: ${theme.spacing.spacing_5};
      `;
      default:
        return `
          font-size: ${theme.fs.font_md};
          padding: ${theme.spacing.spacing_1} ${theme.spacing.spacing_4};
      `;
    }
  }}
`;

export default StyledButton;
