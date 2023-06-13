import React from "react";
import Row from "../baseComponents/Row.style";
import { ProductItem } from "../shopComponents/ProductItem";
import { ShopBanner } from "../shopComponents/ShopBanner";
import StyledShop from "./Shop.style";
import products from "../../resources/misc/products";

const Shop: React.FC = (props) => {
  return (
    <StyledShop>
      <ShopBanner />
      {/* Product rows */}
      <Row className="product__wrapper">
        {products.map((product, i) => (
          <ProductItem
            id={product.id}
            images={product.image}
            name={product.name}
            price={product.price}
            categories={product.categories}
            description={product.description}
            key={i}
          />
        ))}
      </Row>
    </StyledShop>
  );
};

export default Shop;
