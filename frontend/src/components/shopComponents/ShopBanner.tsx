import { useRef } from "react";
import StyledShopBanner from "./ShopBanner.style";
import ShopBannerLine from "./ShopBannerLine";

export const ShopBanner = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <StyledShopBanner ref={containerRef}>
      <div className="banner__text-container">
        <h1 className="banner__title">Kauppa</h1>
        <p className="banner__desc">
          Kaupan idea vielä nopeasti parilla lauseella selittävä slogan tai idea
          tähän.
        </p>
      </div>
      <ShopBannerLine container={containerRef} />
    </StyledShopBanner>
  );
};
