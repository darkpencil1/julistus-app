import StyledLanderTagIcon from "./LanderTagIcon.style";
import icon from "../../../resources/images/achievement-tag-icon.svg";
import Icon from "../../baseComponents/Icon";

const LanderTagIcon = () => {
  return (
    <StyledLanderTagIcon>
      <Icon play={true} icon={icon} size="md" />
      <h2>Saavutusmerkit</h2>
    </StyledLanderTagIcon>
  );
};

export default LanderTagIcon;
