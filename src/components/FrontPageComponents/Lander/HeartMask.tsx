import StyledHeartMask from "./HeartMask.style";

type HeartMaskProps = {
  size: number;
};
const HeartMask = ({ size }: HeartMaskProps) => {
  const width = size;
  const height = (410 / 466) * size;
  return (
    <StyledHeartMask
      height={0}
      width={0}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="heart-clip">
          <path
            fill="#FFFFFF"
            stroke="#000000"
            d="M447.096 61.9987C400.267 -39.191 256.111 2.47271 230.678 69.747C229.903 71.7985 225.894 71.7857 225.145 69.7244C200.668 2.37696 67.2409 -40.1833 20.4154 60.9981C-64.7057 244.929 153.112 269.098 226.045 408.407C226.81 409.869 228.948 409.872 229.715 408.411C302.841 269.115 532.218 245.931 447.096 61.9987Z"
          />
        </clipPath>
      </defs>
    </StyledHeartMask>
  );
};
export default HeartMask;
