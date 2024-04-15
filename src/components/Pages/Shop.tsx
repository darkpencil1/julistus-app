import React from "react";
import Row from "../baseComponents/Row.style";
import ProductItem from "../shopComponents/ProductItem";
import { ShopBanner } from "../shopComponents/ShopBanner";
import StyledShop from "./Shop.style";
import products from "../../resources/misc/products";

const Shop: React.FC = () => {
  return (
    <StyledShop>
      <ShopBanner />
      {/* Product rows */}
      <Row className="product__wrapper">
        {products.map((product, i) => (
          <ProductItem
            id={product.id}
            images={product.images}
            name={product.name}
            snapshot={product.snapshot}
            productType={product.productType}
            key={i}
          />
        ))}
      </Row>
    </StyledShop>
  );
};

export default Shop;
