import styled from "styled-components";

type ButtonProps = {
  primary?: boolean;
  secondary?: boolean;
};

const Button = styled.button<ButtonProps>`
  display: inline-flex;
  width: auto;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: ${(p) =>
    p.secondary ? p.theme.br.br_medium : p.theme.br.br_medium};
  background-color: ${(props) => props.theme.colors.bg};
  padding: ${(p) => p.theme.spacing.spacing_3};
  color: ${(props) => props.theme.colors.primary};
  font-weight: ${(props) => props.theme.fw.fw_bold};
  font-size: ${(p) => p.theme.fs.fs_xl};
  font-size: 1.5rem;
  line-height: 1rem;
`;

export default Button;
