import styled from "styled-components";

type Size = "sm" | "md" | "lg" | "xl";

type ButtonProps = {
  primary?: boolean;
  secondary?: boolean;
  size?: Size;
};

const Button = styled.button<ButtonProps>`
  display: inline-flex;
  width: fit-content;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: ${(p) =>
    p.primary ? p.theme.br.br_large : p.theme.br.br_medium};
  background-color: ${(props) => props.theme.colors.bg};
  color: ${(props) => props.theme.colors.primary};
  font-weight: ${(props) => props.theme.fw.fw_bold};
  font-size: ${(p) => p.theme.fs.fs_xl};
  font-size: 1.5rem;
  line-height: 1rem;

  /*Effects*/
  &:hover {
    box-shadow: 0 0 0 1px ${(props) => props.theme.colors.primary};
  }

  &:active {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.bg};
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
          padding: ${theme.spacing.spacing_5};

      `;
      case "xl":
        return `
          font-size: ${theme.fs.fs_xl};
          padding: ${theme.spacing.spacing_5};
      `;
      default:
        return `
          font-size: ${theme.fs.fs_md}
          padding: ${theme.spacing.spacing_4};
      `;
    }
  }}
`;

export default Button;
