import styled from "styled-components";

const StyledCharacterImg = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .char__img {
    height: 400px;
  }

  @media (max-width: 1800px) {
    .char__img {
      height: 300px;
    }
  }
`;

export default StyledCharacterImg;
