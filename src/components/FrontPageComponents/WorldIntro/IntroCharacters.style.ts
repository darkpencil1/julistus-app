import styled from "styled-components";

const StyledIntroCharacters = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .char__container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: none;
    gap: -100px;

    .intro__char-img-container {
      display: flex;
      flex-direction: row;

      .intro__char-img {
        height: 70vh;
      }

      h3 {
        max-width: 50px;
        margin-left: -50px;
        margin-right: 50px;
      }
    }
    .intro__heart-img-container {
      align-self: center;
      display: flex;
      flex-direction: row-reverse;

      .intro__heart-img {
        height: 300px;
      }
    }
  }
  .intro__char-text-container {
    display: flex;
    flex-direction: row;
    align-self: center;
    margin-left: 200px;
    margin-top: -150px;

    h3 {
      margin-bottom: 0;
    }
    p {
      margin-top: 0;
    }

    > .swarm__icon-container--1 {
      margin-bottom: -20px;
    }

    > .swarm__icon-container--2 {
      margin-bottom: 30px;
    }

    > .swarm__icon-container--3 {
      margin-left: 40px;
    }
  }
`;

export default StyledIntroCharacters;
