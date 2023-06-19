import Col from "../baseComponents/Col.style";
import { ShopBannerInfo } from "./ShopBannerInfo";
import StyledProductBanner from "./ShopBanner.style";

export const ShopBanner = (props: {}) => {
  return (
    <StyledProductBanner>
      <Col className="banner__text-container"></Col>
      <Col className="banner__img"></Col>
      <ShopBannerInfo />
    </StyledProductBanner>
  );
};
