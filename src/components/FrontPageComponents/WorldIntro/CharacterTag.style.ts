import styled from "styled-components";

const StyledCharacterTag = styled.div`
  display: inline-flex;
  background-color: ${(p) => p.theme.colors.bg};
  border-radius: ${(p) => p.theme.br.br_large};
  border: 2px solid ${(p) => p.theme.colors.primary};
  padding-right: 10px;
  gap: 10px;
  width: fit-content;

  .tag__img-container {
    width: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${(p) => p.theme.br.br_large};
    background-color: ${(p) => p.theme.colors.primary};
  }

  .tag__img {
    width: 20px;
    height: 20px;
  }
`;

export default StyledCharacterTag;
