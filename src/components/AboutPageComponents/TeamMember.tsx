import Row from "../baseComponents/Row.style";
import Image from "../baseComponents/Image.style";
import StyledTeamMember from "./TeamMember.style";
import { Member } from "./teamMembers";

const TeamMember = ({ img, name, description }: Member) => {
  return (
    <StyledTeamMember>
      <div className="member__img-container">
        <Image className="member__img" src={img} />
      </div>
      <Row className="member__text-container">
        <h2 className="member__title">{name}</h2>
        <div className="member__text">{description}</div>
      </Row>
    </StyledTeamMember>
  );
};

export default TeamMember;
