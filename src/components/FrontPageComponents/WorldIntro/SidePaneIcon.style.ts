import styled from "styled-components";

type StyledSidePaneIconProps = {
  top: number;
  left: number;
};

const size = "50px";

const StyledSidePaneIcon = styled.div<StyledSidePaneIconProps>`
  position: absolute;
  top: ${(p) => p.top}%;
  left: ${(p) => p.left}%;
  width: ${size};
  height: ${size};

  .sidepane__icon {
    filter: drop-shadow(0 0 10px ${(p) => p.theme.colors.red});
  }
`;

export default StyledSidePaneIcon;
