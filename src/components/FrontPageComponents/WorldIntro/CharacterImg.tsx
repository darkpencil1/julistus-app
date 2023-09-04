import StyledCharacterImg from "./CharacterImg.style";
import CharacterTag from "./CharacterTag";

export type CharacterImgProps = {
  img: string;
  icon: string;
  name: string;
};
const CharacterImg = ({ img, icon, name }: CharacterImgProps) => {
  return (
    <StyledCharacterImg>
      <CharacterTag icon={icon} name={name} />
      <img className="char__img" src={img} />
    </StyledCharacterImg>
  );
};
export default CharacterImg;
