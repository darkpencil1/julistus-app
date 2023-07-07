import styled from "styled-components";

type ImageProps = {
  width?: string;
  height?: string;
};
const Image = styled.img<ImageProps>`
  width: ${(p) => (p.width ? p.width : "auto")};
  height: ${(p) => (p.height ? p.height : "auto")};
`;

export default Image;
