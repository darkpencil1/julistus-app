import React from "react";
import MissionBanner from "../AboutPageComponents/MissionBanner";
import OurStory from "../AboutPageComponents/OurStory";
import OurValues from "../AboutPageComponents/OurValues";
import StyledAboutPage from "./About.style";

const About: React.FC = () => {
  return (
    <StyledAboutPage>
      <MissionBanner />
      <OurStory />
      <OurValues />
    </StyledAboutPage>
  );
};

export default About;
