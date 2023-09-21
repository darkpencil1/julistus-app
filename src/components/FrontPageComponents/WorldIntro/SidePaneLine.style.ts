import styled from "styled-components";

const StyledSidePaneLine = styled.svg`
  position: absolute;
  top: 40%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  clip-path: url(#sidepane-clip);
  mask-repeat: no-repeat;
`;

export default StyledSidePaneLine;
