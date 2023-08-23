import StyledIcon from "./Icon.style";

type IconProps = {
  icon: string;
};

const Icon = ({ icon }: IconProps) => {
  return (
    <StyledIcon>
      <img className="icon__main" src={icon} />
    </StyledIcon>
  );
};

export default Icon;
