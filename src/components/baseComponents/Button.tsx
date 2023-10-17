import StyledButton, { ButtonType, ButtonSize } from "./Button.style";

type ButtonProps = {
  className?: string;
  type?: ButtonType;
  size?: ButtonSize;
  text: string;
  onClick?: () => void;
};

const Button = ({ type, size, text, className, onClick }: ButtonProps) => {
  return (
    <StyledButton
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 1000, damping: 10 }}
      size={size}
      btnType={type}
      className={className}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  );
};
export default Button;
