import { motion, useAnimate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import StyledSidePaneLine from "./SidePaneLine.style";

type LineProps = {
  container: React.RefObject<HTMLDivElement | null>;
};

const SidePaneLine = ({ container }: LineProps) => {
  const lineRef = useRef(null);
  const lineInView = useInView(lineRef, { once: true });
  const [scope, animate] = useAnimate();
  const [clipWidth, setClipWidth] = useState<number>(0);
  const [clipHeight, setClipHeight] = useState<number>(0);

  useEffect(() => {
    if (container.current) {
      setClipWidth(container.current.clientWidth);
      setClipHeight(container.current.clientHeight);
    }
  }, [container]);

  useEffect(() => {
    animate(
      scope.current,
      { pathLength: [0, 1] },
      {
        delay: 1.3,
        duration: 1,
        type: "tween",
      }
    );
  }, [lineInView]);

  return (
    <StyledSidePaneLine
      width={clipWidth}
      height="469"
      viewBox="0 0 664 469"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={lineRef}
    >
      <g filter="url(#filter0_d_960_34295)">
        <motion.path
          ref={scope}
          d="M-15.7676 30.7435C-15.7676 53.2876 -11.5229 74.1854 6.96052 88.6507C29.9013 106.604 63.3808 110.404 90.758 117.308C152.75 132.941 215.038 146.673 277.227 161.578C308.153 168.99 345.422 173.738 371.993 193.002C389.003 205.334 391.393 227.292 391.559 246.562C391.732 266.541 385.88 273.682 370.907 286.089C350.281 303.178 329.689 309.632 303.513 313.659C287.674 316.096 272.189 320.005 256.772 324.232C247.758 326.704 227.352 328.693 221.79 336.782C216.298 344.771 213.478 348.565 213.687 358.423C214.168 380.989 231.491 394.778 250.448 403.682C271.461 413.552 293.407 420.032 315.47 427.201C334.138 433.266 349.596 434.224 368.93 435.501C390.45 436.922 412.087 439.424 433.656 437.28C455.25 435.133 476.149 429.84 497.196 424.829C542.792 413.973 590.29 415.041 636.825 418.505C656.825 419.993 677.312 419.539 697.104 423.05C704.653 424.389 711.482 427.704 718.844 429.177"
          stroke="#EFCE1E"
          strokeWidth="9"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="sidepane-clip">
          <rect
            x="0"
            y="0"
            stroke="#000000"
            strokeMiterlimit="10"
            width={clipWidth}
            height={clipHeight}
          />
        </clipPath>
        <filter
          id="filter0_d_960_34295"
          x="-46.2676"
          y="0.243469"
          width="795.613"
          height="468.368"
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
          <feGaussianBlur stdDeviation="13" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.913725 0 0 0 0 0.294118 0 0 0 0 0.160784 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_960_34295"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_960_34295"
            result="shape"
          />
        </filter>
      </defs>
    </StyledSidePaneLine>
  );
};

export default SidePaneLine;
