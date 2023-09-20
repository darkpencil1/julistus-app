import styled from "styled-components";
import mask from "../../../resources/images/map-banner.png";

const StyledLine = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  clip-path: url(#banner-clip);
  mask-repeat: no-repeat;
`;

export default StyledLine;
