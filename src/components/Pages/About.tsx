import React from "react";
import MissionBanner from "../AboutPageComponents/MissionBanner";
import OurStory from "../AboutPageComponents/OurStory";
import StyledAboutPage from "./About.style";

const About: React.FC = () => {
  return (
    <StyledAboutPage>
      <MissionBanner />
      <OurStory />
    </StyledAboutPage>
  );
};

export default About;
