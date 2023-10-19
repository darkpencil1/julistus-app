import styled from "styled-components";

export type LinePosition = {
  top: number;
  left?: number;
};

type StyledLineProps = {
  maskId: string;
  position?: LinePosition;
};
const StyledLine = styled.svg<StyledLineProps>`
  position: absolute;
  top: ${(p) => (p.position ? p.position.top : 0)}%;
  left: ${(p) => (p.position ? p.position.left : 0)}%;
  clip-path: url(#${(p) => p.maskId});
  mask-repeat: no-repeat;
`;

export default StyledLine;
