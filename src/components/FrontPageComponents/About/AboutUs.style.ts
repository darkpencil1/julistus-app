import styled from "styled-components";
import Row from "../../baseComponents/Row.style";

const StyledAboutUs = styled(Row)`
  height: 60vh;
  flex-wrap: no-wrap;
  justify-content: center;
  margin: 200px 50px 0 50px;

  .about-us__value-container {
    flex: 1;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  .about-us__text-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    max-width: 700px;
  }

  .about-us__text-container > h1 {
    margin-bottom: 0;
  }

  .about-us__value {
    flex-basis: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
  }
  .about-us__value > h3 {
    margin-top: 10px;
  }
`;

export default StyledAboutUs;
