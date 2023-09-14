import StyledLines, { StyledLinesProps } from "./MapLine.style";
import { motion, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";

const MapLine3 = ({ size }: StyledLinesProps) => {
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

  return (
    <StyledLines
      size={size}
      width={size}
      height={size}
      viewBox="0 0 485 351"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_920_108983)">
        <motion.path
          ref={scope}
          d="M79.8794 11.5647C55.9481 26.3793 34.8342 47.7987 24.1674 74.2465C15.6194 95.441 11.5411 127.027 24.4971 147.854C39.9303 172.663 79.4705 178.064 103.85 186.565C123.087 193.273 146.358 200.219 162.105 214.68C177.738 229.036 175.424 253.022 182.921 271.24C192.719 295.049 209.049 320.649 233.97 330.908C255.968 339.962 274.724 328.707 289.164 312.4C310.474 288.335 318.938 255.54 344.641 234.978C373.162 212.161 410.275 209.884 440.382 230.975C446.228 235.07 450.305 240.717 455.876 244.961C460.059 248.148 465.818 249.576 470.664 251.46"
          stroke="#EFCE1E"
          strokeWidth="8"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_920_108983"
          x="0.208008"
          y="-4.43579"
          width="486.457"
          height="354.581"
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
          <feGaussianBlur stdDeviation="6" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.913725 0 0 0 0 0.294118 0 0 0 0 0.160784 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_920_108983"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_920_108983"
            result="shape"
          />
        </filter>
      </defs>
    </StyledLines>
  );
};

export default MapLine3;
