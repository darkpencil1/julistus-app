import styled from "styled-components";
import bg from "../../../resources/images/sidepane.png";

const StyledIntroSidePane = styled.div`
  background-image: url(${bg});

  .sidepane__text-container {
    text-align: center;
  }

  .sidepane__text-container > h1 {
    color: ${(p) => p.theme.colors.secondary}!important;
    text-shadow: 0 0 20px ${(p) => p.theme.colors.shadow};
    margin-bottom: 0;
  }

  .sidepane__text-container > h2 {
    color: ${(p) => p.theme.colors.secondary}!important;
    text-shadow: 0 0 20px ${(p) => p.theme.colors.shadow};
    margin-top: 0;
  }

  .sidepane__text-container > p {
    color: ${(p) => p.theme.colors.secondary}!important;
    width: 60%;
    margin: auto;
  }
`;

export default StyledIntroSidePane;
