import styled from "styled-components";
import bg from "../../resources/images/nappitausta.png";

const StyledIcon = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${bg});
  background-color: #cccccc; /* Used if the image is unavailable */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${(p) => p.theme.br.br_medium};
`;

export default StyledIcon;
