import StyledIntro from "./Intro.style";
import IntroSidePane from "./IntroSidePane";
import IntroCharacters from "./IntroCharacters";

const Intro = () => {
  return (
    <StyledIntro>
      <IntroCharacters />
      <IntroSidePane />
    </StyledIntro>
  );
};

export default Intro;
