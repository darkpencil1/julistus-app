import styled from "styled-components";

const StyledIntroCharacters = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .char__heart {
    width: 600px;
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
`;

export default StyledIntroCharacters;
