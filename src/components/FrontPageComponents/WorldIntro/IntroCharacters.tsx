import character from "../../../resources/images/character.png";
import badguys from "../../../resources/images/badguys.png";
import building from "../../../resources/images/building1.png";
import heart from "../../../resources/images/sydän1.png";
import StyledIntroCharacters from "./IntroCharacters.style";
import { CharacterImg } from "./CharacterImg";

const worldElements: Array<string> = [building, badguys];

const IntroCharacters = () => {
  return (
    <StyledIntroCharacters>
      <img className="char__heart" src={heart} />
      <div className="char__container">
        <div className="char__container--left">
          <CharacterImg img={character} />;
        </div>
        <div className="char__container--right">
          {worldElements.map((img: string, i: number) => {
            return <CharacterImg img={img} key={i} />;
          })}
        </div>
      </div>
    </StyledIntroCharacters>
  );
};

export default IntroCharacters;
