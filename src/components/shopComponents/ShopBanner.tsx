import Col from "../baseComponents/Col.style";
import { ShopBannerInfo } from "./ShopBannerInfo";
import StyledProductBanner from "./ShopBanner.style";

export const ShopBanner = () => {
  return (
    <StyledProductBanner>
      <Col className="banner__text-container">
        <h1 className="banner__title">Kauppa</h1>
        <p className="banner__desc">
          Kaupan idea vielä nopeasti parilla lauseella selittävä slogan tai idea
          tähän.
        </p>
      </Col>
      <Col className="banner__img"></Col>
      <ShopBannerInfo />
    </StyledProductBanner>
  );
};
