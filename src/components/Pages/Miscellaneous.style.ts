import styled from "styled-components";

const StyledMiscellaneousPage = styled.div`
  margin: 2rem auto;
  padding: 0 2rem;
  max-width: 2000px;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  .misc__intro-text-container {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    > h1 {
      margin: 0;
      line-height: 1;
    }
    > h3 {
      margin: 1rem 0;
    }
    > p {
      margin: 0;
    }
  }
  .misc__qa-container {
    border-radius: ${(p) => p.theme.br.br_large};
    border-bottom: 2px solid ${(props) => props.theme.colors.primary};
    border-right: 2px solid ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 10px ${(props) => props.theme.colors.primary};
    background-color: ${(p) => p.theme.colors.white};
  }
`;

export default StyledMiscellaneousPage;
