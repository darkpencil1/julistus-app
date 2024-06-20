import styled from "styled-components";

const StyledMiscQuestion = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${(p) => p.theme.colors.primary};

  .misc__question-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    > h3 {
      margin: 0;
    }
  }

  .misc__dropdown-arrow {
    width: 30px;
    cursor: pointer;
  }
`;

export default StyledMiscQuestion;
