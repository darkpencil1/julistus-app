import character from "../../../resources/images/character.png";
import badguys from "../../../resources/images/badguys.png";
import building from "../../../resources/images/building1.png";
import heart from "../../../resources/images/sydän1.png";
import mock_icon from "../../../resources/images/nuoli-kuvake.png";
import heart_icon from "../../../resources/images/sydän-keltainen.png";
import StyledIntroCharacters from "./IntroCharacters.style";
import CharacterImg, { CharacterImgProps } from "./CharacterImg";

const worldElements: Array<CharacterImgProps> = [
  { img: building, icon: mock_icon, name: "Tärkeä paikka" },
  { img: character, icon: heart_icon, name: "Sankarit" },
  { img: badguys, icon: mock_icon, name: "Haasteiden joukko" },
];

const IntroCharacters = () => {
  return (
    <StyledIntroCharacters>
      <img className="char__heart" src={heart} />
      <div className="char__container">
        {worldElements.map((elem: CharacterImgProps, i: number) => {
          return (
            <CharacterImg
              img={elem.img}
              icon={elem.icon}
              name={elem.name}
              key={i}
            />
          );
        })}
      </div>
    </StyledIntroCharacters>
  );
};

export default IntroCharacters;
