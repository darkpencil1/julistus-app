import styled from "styled-components";

const StyledCatalog = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: column;

  .catalog__title {
    margin: auto;
    margin-top: 10px;
    text-align: center;
    > h1 {
      margin: 0;
    }
    > h3 {
      margin-top: 10px;
    }
  }
`;

export default StyledCatalog;
