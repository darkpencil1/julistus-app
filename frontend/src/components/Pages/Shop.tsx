import React from "react";
import Row from "../baseComponents/Row.style";
import ProductItem from "../shopComponents/ProductItem";
import { ShopBanner } from "../shopComponents/ShopBanner";
import StyledShop from "./Shop.style";
import { useProducts } from "../../hooks/useProducts";
import IProduct from "@shared/types/ProductInterface";

const Shop: React.FC = () => {
  const { data } = useProducts();

  return (
    <StyledShop>
      <ShopBanner />
      {/* Product rows */}
      <Row className="product__wrapper">
        {data?.map((product: IProduct) => (
          <ProductItem product={product} />
        ))}
      </Row>
    </StyledShop>
  );
};

export default Shop;
