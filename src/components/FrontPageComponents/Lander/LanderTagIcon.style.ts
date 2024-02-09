import styled from "styled-components";

const StyledLanderTagIcon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h2 {
    margin: 0;
    font-size: ${(p) => p.theme.fs.font_lg};
  }
`;

export default StyledLanderTagIcon;
