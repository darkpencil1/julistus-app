import styled from "styled-components";

const StyledValueContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 70px;
  margin: 0 ${(p) => p.theme.spacing.spacing_6};
`;

export default StyledValueContainer;
