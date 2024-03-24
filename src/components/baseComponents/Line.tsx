import { useEffect, useRef, useState } from "react";
import { motion, useAnimate, useInView } from "framer-motion";
import StyledLine from "./Line.style";
import ISvg from "../../resources/interfaces/SvgInterface";
import colors from "../../resources/styles/baseColors";

const lineColor = colors.secondary;

type LineProps = {
  container: React.RefObject<HTMLDivElement | null>;
  svg: ISvg;
};

const Line = ({ container, svg }: LineProps) => {
  const lineRef = useRef(null);
  const lineInView = useInView(lineRef, { once: true });
  const [scope, animate] = useAnimate();
  const [clipWidth, setClipWidth] = useState<number>(0);
  const [clipHeight, setClipHeight] = useState<number>(0);

  useEffect(() => {
    if (container.current) {
      setClipWidth(container.current.offsetWidth);
      setClipHeight(container.current.offsetHeight);
    }
  }, [container]);

  useEffect(() => {
    animate(
      scope.current,
      { pathLength: [0, 1] },
      {
        delay: 1.3,
        duration: 3,
        type: "tween",
      }
    );
  }, [lineInView]);

  return (
    <StyledLine
      width={svg.width}
      height={svg.height}
      viewBox={svg.viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      maskId={`${svg.id}-clip`}
      position={svg.position}
      ref={lineRef}
    >
      <svg />
      <g filter={`url(#${svg.id}-filter)`}>
        <motion.path
          ref={scope}
          d={svg.d}
          stroke={lineColor}
          strokeWidth={svg.strokeWidth ? svg.strokeWidth : 12}
          strokeLinecap="round"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <clipPath id={`${svg.id}-clip`}>
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
          id={`${svg.id}-filter`}
          width={svg.width}
          height={svg.height}
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
            result="effect1_dropShadow_956_57810"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_956_57810"
            result="shape"
          />
        </filter>
      </defs>
    </StyledLine>
  );
};

export default Line;
