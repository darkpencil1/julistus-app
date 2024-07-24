import styled, { keyframes, css } from "styled-components";

type MapLocationProps = {
  top: number;
  left: number;
  active: boolean;
  hasWideImg: boolean;
  mapSignSize?: number;
};

//Default size (px) for map sign
const defaultSignSize = 60;
//All A serie paper sizes have the same aspect ratio
const aspectRatio = 1.414;

//Size in px for longside of image
const longsideWidth = 400;
const landscapeWidth = longsideWidth;
const landscapeHeight = landscapeWidth / aspectRatio;
const portraitWidth = landscapeWidth / aspectRatio;
const portraitHeight = portraitWidth * aspectRatio;

const animOrigins = {
  BOTTOM: "bottom",
  TOP: "top",
  RIGHT: "right",
  LEFT: "left",
};
const spreadImage = (hasWideImg: boolean, animOrigin: string) => {
  return keyframes`
  from {
    width: ${hasWideImg ? `${landscapeWidth}px` : `${portraitWidth}px`};
    transform-origin: ${animOrigin};
    transform: scaleY(0) scaleX(0);
  }
  to {
    width: ${hasWideImg ? `${landscapeWidth}px` : `${portraitWidth}px`};
    transform-origin: ${animOrigin};
    transform: scaleY(1) scaleX(1);
  }
`;
};

const setImgLeft = (
  left: number,
  hasWideImg: boolean,
  forAnim: boolean,
  mapSignSize: number = defaultSignSize
) => {
  if (left > 70) {
    if (hasWideImg) return forAnim ? animOrigins.RIGHT : `-${landscapeWidth}`;
    else return forAnim ? animOrigins.RIGHT : `-${portraitWidth}`;
  } else return forAnim ? animOrigins.LEFT : `${mapSignSize}`;
};

const setImgTop = (top: number, hasWideImg: boolean, forAnim: boolean) => {
  if (top > 70) {
    if (hasWideImg)
      return forAnim
        ? animOrigins.BOTTOM
        : `-${landscapeHeight - defaultSignSize}`;
    else
      return forAnim
        ? animOrigins.BOTTOM
        : `-${portraitHeight - defaultSignSize}`;
  } else return forAnim ? animOrigins.TOP : 0;
};

const setImgBr = (left: number, top: number, br: string) => {
  if (left > 70) {
    if (top > 70) {
      return `${br} ${br} ${br} 0`;
    } else return `${br} 0 ${br} ${br}`;
  } else if (top > 70) {
    return `${br} ${br} ${br} 0`;
  } else return `0 ${br} ${br}`;
};

const setAnimOrigin = (top: number, left: number, hasWideImg: boolean) => {
  const yOrigin = setImgTop(top, hasWideImg, true);
  const xOrigin = setImgLeft(left, hasWideImg, true);
  return yOrigin + " " + xOrigin;
};
const StyledMapLocation = styled.div<MapLocationProps>`
  position: absolute;
  top: ${(p) => p.top}%;
  left: ${(p) => p.left}%;

  .location__img {
    position: absolute;
    display: ${(p) => (p.active ? "block" : "none")};
    border: 1px solid ${(p) => p.theme.colors.bg};
    ${({ hasWideImg, top, left }) =>
      css`
        animation: ${spreadImage(
            hasWideImg,
            setAnimOrigin(top, left, hasWideImg)
          )}
          1.5s linear forwards;
        left: ${setImgLeft(left, hasWideImg, false)}px;
        top: ${setImgTop(top, hasWideImg, false)}px;
        border-radius: ${(p) => setImgBr(left, top, p.theme.br.br_medium)};
      `}
  }

  .location__item-container {
    display: flex;
    flex-direction: ${(p) => (p.left > 70 ? "row-reverse" : "row")};
    align-items: start;
    flex-wrap: no-wrap;
  }
`;

export default StyledMapLocation;
