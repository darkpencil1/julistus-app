import StyledButton, { ButtonType, ButtonSize } from "./Button.style";

type ButtonProps = {
  className?: string;
  type?: ButtonType;
  size?: ButtonSize;
  text: string;
};

const Button = ({ type, size, text, className }: ButtonProps) => {
  return (
    <StyledButton
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 1000, damping: 10 }}
      size={size}
      btnType={type}
      className={className}
    >
      {text}
    </StyledButton>
  );
};
export default Button;
