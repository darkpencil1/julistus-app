import Icon from "../../baseComponents/Icon";
import StyledLanderProductBrief from "./LanderProductBrief.style";

export type LanderProductBriefProps = {
  img: string;
  title: string;
  desc: string;
  icon: string;
};

const LanderProductBrief = ({
  img,
  title,
  desc,
  icon,
}: LanderProductBriefProps) => {
  return (
    <StyledLanderProductBrief>
      <img src={img} />
      <div className="landerBrief__text-container">
        <span>
          <Icon play={true} icon={icon} size="md" />
          <h3>{title}</h3>
        </span>
        <p>{desc}</p>
      </div>
    </StyledLanderProductBrief>
  );
};
export default LanderProductBrief;
