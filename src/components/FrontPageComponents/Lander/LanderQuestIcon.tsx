import StyledLanderQuestIcon from "./LanderQuestIcon.style";
import icon from "../../../resources/images/quest-icon.svg";
import Icon from "../../baseComponents/Icon";

const LanderQuestIcon = () => {
  return (
    <StyledLanderQuestIcon>
      <Icon play={true} icon={icon} size="xl" />
      <div>
        <h2>Tehtävä-</h2>
        <h2>julisteita</h2>
      </div>
    </StyledLanderQuestIcon>
  );
};

export default LanderQuestIcon;
