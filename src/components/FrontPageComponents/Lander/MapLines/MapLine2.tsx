import StyledLines, { StyledLinesProps } from "./MapLine.style";
import { motion, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";

const MapLine2 = ({ size }: StyledLinesProps) => {
  const [show, setShow] = useState<boolean>(true);
  const [scope, animate] = useAnimate();

  //Animate the svg periodically
  useEffect(() => {
    const pathLength = show ? [0, 1] : [1, 0];
    animate(
      scope.current,
      { pathLength: pathLength },
      {
        delay: 1.8,
        duration: 3,
        type: "tween",
      }
    );
    setTimeout(() => setShow(!show), 5000);
  }, [show]);

  //Ratio for svg based on the original heart bg img it was drawn on
  const svgWidth = 462;
  const svgHeight = 433;
  const heartWidth = 465;
  const svgRatio = svgHeight / svgWidth;
  const svgImgRatio = svgWidth / heartWidth;

  const svgScaledWidth = svgImgRatio * size;
  const svgScaledHeight = svgRatio * svgScaledWidth;

  return (
    <StyledLines
      size={size}
      width={svgScaledHeight}
      height={svgScaledHeight}
      viewBox="0 0 462 433"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_925_94125)">
        <motion.path
          ref={scope}
          d="M439.457 35.8032C440.884 41.8719 441.465 48.512 441.731 54.7009C442.301 67.9475 442.606 81.2881 442.606 94.5521C442.606 111.259 444.612 129.579 439.675 145.689C435.669 158.763 430.363 172.168 423.796 184.185C418.558 193.769 410.748 202.254 403.805 210.606C388.726 228.745 374.445 247.637 354.636 260.956C335.205 274.022 313.873 283.393 293.656 294.946C275.421 305.366 256.719 317.7 244.137 334.666C230.736 352.737 230.242 374.465 232.064 396.127C232.454 400.773 232.121 405.741 236.482 408.332C242.383 411.837 247.629 412.297 254.417 412.575C260.36 412.818 266.372 412.691 272.309 413.056C279.954 413.527 287.787 414.791 295.45 414.543C301.796 414.339 308.629 411.416 314.653 409.644C326.05 406.292 335.243 397.092 344.137 389.565C355.254 380.159 368.476 372.489 377.077 360.475C389.691 342.855 390.999 323.728 389.85 302.645C389.179 290.32 386.092 278.098 382.764 266.249C381.418 261.46 379.511 256.468 376.814 252.251C365.233 234.136 352.395 215.563 334.47 203.082C311.839 187.326 284.976 172.647 256.517 176.661C240.52 178.917 224.445 181.091 208.573 184.097C193.308 186.988 178.686 192.503 163.516 195.908C159.399 196.833 154.782 197.133 150.568 197.133C147.931 197.133 144.369 193.701 142.256 192.409C131.475 185.815 122.359 180.56 113.385 171.586C100.954 159.156 92.2533 142.285 82.7636 127.754C74.5436 115.167 66.4615 102.837 59.579 89.434C56.9569 84.3278 20.7509 23.2521 18.5 18"
          mask="url(#mask)"
          stroke="#EFCE1E"
          strokeWidth="8"
          strokeLinecap="round"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_925_94125"
          x="0.499023"
          y="-0.000976562"
          width="460.511"
          height="432.576"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="7" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.913725 0 0 0 0 0.294118 0 0 0 0 0.160784 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_925_94125"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_925_94125"
            result="shape"
          />
        </filter>
        <mask id="mask">
          <svg
            width="466"
            height="410"
            viewBox="0 0 466 410"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M447.096 61.9987C400.267 -39.191 256.111 2.47271 230.678 69.747C229.903 71.7985 225.894 71.7857 225.145 69.7244C200.668 2.37696 67.2409 -40.1833 20.4154 60.9981C-64.7057 244.929 153.112 269.098 226.045 408.407C226.81 409.869 228.948 409.872 229.715 408.411C302.841 269.115 532.218 245.931 447.096 61.9987Z"
              fill="#ffffff"
            />
          </svg>
        </mask>
      </defs>
    </StyledLines>
  );
};

export default MapLine2;
