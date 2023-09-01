import StyledCharacterImg from "./CharacterImg.style";
type CharacterImgProps = {
  img: string;
};
export const CharacterImg = ({ img }: CharacterImgProps) => {
  return (
    <StyledCharacterImg>
      <img className="char__img" src={img} />
    </StyledCharacterImg>
  );
};
