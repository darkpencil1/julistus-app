import Line from "../baseComponents/Line";
import shopBannerSvg from "./shopBannerSvg";

type ShopBannerLineProps = {
  container: React.RefObject<HTMLDivElement | null>;
};

const ShopBannerLine = ({ container }: ShopBannerLineProps) => {
  return <Line container={container} svg={shopBannerSvg}></Line>;
};

export default ShopBannerLine;
