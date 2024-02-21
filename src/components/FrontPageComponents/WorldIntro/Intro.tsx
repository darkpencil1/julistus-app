import StyledIntro from "./Intro.style";
import IntroSidePane from "./IntroSidePane";
import IntroCharacters from "./IntroCharacters";

const Intro = () => {
  return (
    <StyledIntro>
      <IntroSidePane />
      <IntroCharacters />
    </StyledIntro>
  );
};

export default Intro;
