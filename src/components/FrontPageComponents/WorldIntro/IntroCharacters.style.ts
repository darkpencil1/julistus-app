import styled from "styled-components";

const StyledIntroCharacters = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  > button {
    margin: auto;
    margin-top: ${(p) => p.theme.spacing.spacing_3};
  }
  .char__heart {
    width: 500px;
    margin: 0 auto;
  }

  .char__container {
    display: flex;
    flex-direction: row;
    flex-wrap: none;
    justify-content: space-between;
    gap: 10px;
    margin-top: -200px;
  }

  @media (max-width: 1600px) {
    .char__heart {
      width: 400px;
    }
  }
`;

export default StyledIntroCharacters;
