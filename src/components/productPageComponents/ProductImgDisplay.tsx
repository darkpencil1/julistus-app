import React from "react";
import Col from "../baseComponents/Col.style";
import Row from "../baseComponents/Row.style";
import Image from "../baseComponents/Image.style";
import { ImgPicker } from "./ImgPicker";
import { useProduct } from "../../state/contexts/productContext";
import StyledProductImgDisplay from "./ProductImgDisplay.style";

export const ProductImgDisplay = (props: {}) => {
  const { product } = useProduct();
  const [selectedImg, setSelectedImg] = React.useState(product?.images[0]);
  return (
    <StyledProductImgDisplay>
      <Row className="product__img-row">
        <ImgPicker setSelectedImg={setSelectedImg} selectedImg={selectedImg} />
        <Col className="product__img-main-container">
          <Image src={selectedImg} className="w-75 product__img-main" />
        </Col>
      </Row>
    </StyledProductImgDisplay>
  );
};
