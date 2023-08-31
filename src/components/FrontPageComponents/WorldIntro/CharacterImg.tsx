import StyledCharacterImg from "./CharacterImg.style";
type CharacterImgProps = {
  img: string;
};
export const CharacterImg = ({ img }: CharacterImgProps) => {
  return (
    <StyledCharacterImg>
      <img src={img} />
    </StyledCharacterImg>
  );
};
