import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import "../../resources/styles/css/shop.css";
import { ProductItem } from "../shopComponents/ProductItem";
import { ShopBanner } from "../shopComponents/ShopBanner";
import products from "../../resources/misc/products";

const Shop: React.FC = (props) => {
  return (
    <div>
      <ShopBanner />
      {/* Product rows */}
      <div className="album py-5 mx-5">
        <Container fluid>
          <Row className="align-items-start gx-5 gy-3">
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
        </Container>
      </div>
    </div>
  );
};

export default Shop;
