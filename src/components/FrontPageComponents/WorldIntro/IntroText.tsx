import Link from "../../baseComponents/Link";
import StyledIntroText from "./IntroText.style";

const IntroText = () => {
  return (
    <StyledIntroText>
      <div className="sidepane__text-container">
        <div className="sidepane__title-container">
          <h1>Tutustu maailmaamme</h1>
          <h3>kutsumuksen seuraamisesta</h3>
        </div>
        <p>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </p>
      </div>
      <Link href="/" content="Katso lisää" />
    </StyledIntroText>
  );
};

export default IntroText;
