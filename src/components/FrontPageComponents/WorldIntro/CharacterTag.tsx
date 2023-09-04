import StyledCharacterTag from "./CharacterTag.style";

type CharacterTagProps = {
  icon: string;
  name: string;
};

const CharacterTag = ({ icon, name }: CharacterTagProps) => {
  return (
    <StyledCharacterTag>
      <div className="tag__img-container">
        <img className="tag__img" src={icon} />
      </div>
      <span>{name}</span>
    </StyledCharacterTag>
  );
};
export default CharacterTag;
