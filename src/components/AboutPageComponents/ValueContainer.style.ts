import styled from "styled-components";

const StyledValueContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 70px;
  margin: ${(p) => p.theme.spacing.spacing_4}
    ${(p) => p.theme.spacing.spacing_6};
  height: 300px;
`;

export default StyledValueContainer;
