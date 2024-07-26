import { useRef } from "react";
import StyledShopBanner from "./ShopBanner.style";
import ShopBannerLine from "./ShopBannerLine";

export const ShopBanner = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <StyledShopBanner ref={containerRef}>
      <div className="banner__text-container">
        <h1 className="banner__title">Shop</h1>
        <p className="banner__desc">
          Fancy a quest to cover your wall? Look no further!
        </p>
      </div>
      <ShopBannerLine container={containerRef} />
    </StyledShopBanner>
  );
};
