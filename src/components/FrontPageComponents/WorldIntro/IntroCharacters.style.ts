import styled from "styled-components";

const StyledIntroCharacters = styled.div`
  display: flex;
  flex-direction: row;

  .char__heart {
    width: 600px;
  }

  .char__container--left {
    flex: 1;
  }

  .char__container--right {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

export default StyledIntroCharacters;
