import styled from "styled-components";
import Container from "../baseComponents/Container.style";

const StyledAboutPage = styled(Container)`
  margin: 0 1rem;
  .text__container {
    text-align: center;
  }
  .lead {
    font-weight: 400;
    font-size: 1.2rem;
  }
  .paragraph {
    margin-top: 2rem;
  }

  .image__container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default StyledAboutPage;
