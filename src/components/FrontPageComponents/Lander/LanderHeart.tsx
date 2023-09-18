import MapLine2 from "./MapLines/MapLine2";
import heart from "../../../resources/images/sydän2.png";
import StyledLanderHeart from "./LanderHeart.style";

type LanderHeartProps = {
  size: number;
};
const LanderHeart = ({ size }: LanderHeartProps) => {
  const width = size;
  const height = (410 / 466) * size;
  return (
    <StyledLanderHeart
      width={width}
      height={height}
      viewBox="0 0 466 410"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      clipPath="url(#heart-clip2)"
    >
      <path
        d="M447.096 61.9987C400.267 -39.191 256.111 2.47271 230.678 69.747C229.903 71.7985 225.894 71.7857 225.145 69.7244C200.668 2.37696 67.2409 -40.1833 20.4154 60.9981C-64.7057 244.929 153.112 269.098 226.045 408.407C226.81 409.869 228.948 409.872 229.715 408.411C302.841 269.115 532.218 245.931 447.096 61.9987Z"
        fill="#4154FF"
      />

      <defs>
        <clipPath id="heart-clip2">
          <path d="M447.096 61.9987C400.267 -39.191 256.111 2.47271 230.678 69.747C229.903 71.7985 225.894 71.7857 225.145 69.7244C200.668 2.37696 67.2409 -40.1833 20.4154 60.9981C-64.7057 244.929 153.112 269.098 226.045 408.407C226.81 409.869 228.948 409.872 229.715 408.411C302.841 269.115 532.218 245.931 447.096 61.9987Z" />
        </clipPath>
      </defs>
    </StyledLanderHeart>
  );
};
export default LanderHeart;
