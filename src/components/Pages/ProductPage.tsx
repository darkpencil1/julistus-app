import { ProductImgDisplay } from "../productPageComponents/ProductImgDisplay";
import { ProductText } from "../productPageComponents/ProductText";
import { AddToCartPanel } from "../productPageComponents/AddToCartPanel";
import StyledProductPage from "./Product.style";
import Col from "../baseComponents/Col.style";
import Row from "../baseComponents/Row.style";

export const ProductPage = (props: {}) => {
  return (
    <StyledProductPage>
      <Row>
        <Col className="product__col">
          <Row className="product__container">
            <ProductImgDisplay />
            <ProductText />
          </Row>
        </Col>
        <AddToCartPanel />
      </Row>
    </StyledProductPage>
  );
};

export default ProductPage;
