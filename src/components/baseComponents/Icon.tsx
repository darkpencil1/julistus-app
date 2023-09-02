import StyledIcon from "./Icon.style";
import { Size } from "./Icon.style";

type IconProps = {
  icon: string;
  size: Size;
};

const Icon = ({ icon, size }: IconProps) => {
  return (
    <StyledIcon size={size}>
      <img className="icon__main" src={icon} />
    </StyledIcon>
  );
};

export default Icon;
