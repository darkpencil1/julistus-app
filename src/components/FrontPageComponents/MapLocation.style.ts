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
const landscapeWidth = "400px";
const portraitWidth = "250px";
const landscapeHeight = "200px";
const portraitHeight = "400px";

const spreadImage = (hasWideImg: boolean) => {
  return keyframes`
  from {
    width: 0;
  }
  to {
    width: ${hasWideImg ? landscapeWidth : portraitWidth};
  }
`;
};

const setImgLeft = (
  left: number,
  hasWideImg: boolean,
  mapSignSize: number = defaultSignSize
) => {
  if (left > 70) {
    if (hasWideImg) return `-${landscapeWidth}`;
    else return `-${portraitWidth}`;
  } else return `${mapSignSize}px`;
};

const setImgTop = (top: number, hasWideImg: boolean) => {
  if (top > 70) {
    if (hasWideImg) return `-${landscapeHeight}`;
    else return `-${portraitHeight}`;
  } else return 0;
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
const StyledMapLocation = styled.div<MapLocationProps>`
  position: absolute;
  top: ${(p) => p.top}%;
  left: ${(p) => p.left}%;

  .location__img {
    position: absolute;
    display: ${(p) => (p.active ? "block" : "none")};
    border: 1px solid ${(p) => p.theme.colors.bg};
    ${({ hasWideImg, top, left, mapSignSize }) =>
      css`
        animation: ${spreadImage(hasWideImg)} 1.5s linear forwards;
        left: ${setImgLeft(left, hasWideImg, mapSignSize)};
        top: ${setImgTop(top, hasWideImg)};
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
