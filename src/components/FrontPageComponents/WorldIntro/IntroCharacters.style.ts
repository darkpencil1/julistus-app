import styled from "styled-components";

const StyledIntroCharacters = styled.div`
  display: flex;
  flex-direction: column;

  .char__heart {
    width: 600px;
  }

  .char__container {
    flex: 1;
    display: flex;
    flex-direction: row;
    gap: 100px;
    margin-top: -200px;
  }
  .char__container--left {
    flex: 1;
  }

  .char__container--right {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 100px;
  }
`;

export default StyledIntroCharacters;
