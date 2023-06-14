import styled from "styled-components";

type ButtonProps = {
  primary?: boolean;
  secondary?: boolean;
};

const Button = styled.button<ButtonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: ${(p) =>
    p.secondary ? p.theme.br.br_large : p.theme.br.br_medium};
  background-color: ${(props) => props.theme.colors.bg};
  padding: 0.4rem;
  color: ${(props) => props.theme.colors.primary};
  font-weight: ${(props) => props.theme.fw.fw_bold};
  line-height: 1rem;
`;

export default Button;
