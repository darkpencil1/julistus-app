import styled from "styled-components";
import bg from "../../../resources/images/map-sidebanner.png";

const StyledIntroSidePane = styled.div`
  position: relative;
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 600px;
  border-radius: ${(p) => p.theme.br.br_large};
  border-right: 10px solid ${(p) => p.theme.colors.primary_shadow};
  border-bottom: 10px solid ${(p) => p.theme.colors.primary_shadow};
  display: flex;
  flex-direction: column;

  .sidepane__text-container {
    text-align: center;
    margin-top: 100px;
    margin: 10px 10px 0 10px;
  }

  .sidepane__text-container > h1 {
    color: ${(p) => p.theme.colors.secondary}!important;
    text-shadow: 0 0 20px ${(p) => p.theme.colors.red};
    margin-bottom: 0;
  }

  .sidepane__text-container > h3 {
    color: ${(p) => p.theme.colors.secondary}!important;
    text-shadow: 0 0 20px ${(p) => p.theme.colors.red};
    margin-top: 0;
  }

  .sidepane__text-container > p {
    color: ${(p) => p.theme.colors.secondary}!important;
    width: 80%;
    margin: auto;
  }
  .sidepane__icon-container {
    position: relative;
    flex: 1;
  }
`;

export default StyledIntroSidePane;
