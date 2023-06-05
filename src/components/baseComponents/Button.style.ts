import styled from "styled-components";

type ButtonProps = {
  primary?: boolean;
};

const Button = styled.button<ButtonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 5px;
  background-color: ${(props) => props.theme.bg};
  padding: 0.4rem;
  color: ${(props) => props.theme.primary};
  line-height: 1rem;
`;

export default Button;
