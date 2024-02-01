import styled from "styled-components";
import { motion } from "framer-motion";

export type ButtonSize = "sm" | "md" | "lg" | "xl";
export type ButtonType = "primary" | "secondary" | "white" | "disabled" | "wip";

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
  background-color: ${(p) => p.theme.colors.bg};
  color: ${(p) => p.theme.colors.primary};
  font-weight: ${(p) => p.theme.fw.fw_bold};
  font-size: ${(p) => p.theme.fs.fs_xl};
  font-size: 1.5rem;
  line-height: 1rem;
  z-index: 2;

  /*Effects*/
  &:active {
    background-color: ${(p) => p.theme.colors.primary};
    color: ${(p) => p.theme.colors.secondary};
  }
  &:hover {
    cursor: pointer;
  }

  /* Type spesific styles*/
  ${({ btnType, theme }) => {
    switch (btnType) {
      case "primary":
        return `
          border: 3px solid ${theme.colors.primary};
          border-radius: ${theme.br.br_medium};
      `;
      case "secondary":
        return `
          border: 5px solid ${theme.colors.secondary};
          border-radius: ${theme.br.br_full};
        `;
      case "white":
        return `
          border: 3px solid ${theme.colors.primary};
          border-radius: ${theme.br.br_full};
          background-color: ${theme.colors.white_muted};
          color: ${theme.colors.primary};

      `;
      case "disabled":
        return `
          background-color: ${theme.colors.white_muted};
          color: ${theme.colors.gray};
          border: 3px solid ${theme.colors.gray};
          border-radius: ${theme.br.br_medium};

          &:active {
            background-color: ${theme.colors.white_muted};
            color: ${theme.colors.gray};
          }

          &:hover {
            cursor: auto;
          }
      `;
      case "wip":
        return `
          border: 5px solid "transparent";
          border-radius: ${theme.br.br_medium};
      `;
      default:
        return `
          border: 5px solid "transparent";
          border-radius: ${theme.br.br_medium};
      `;
    }
  }}

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
