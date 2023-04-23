import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import "./ProductImgDisplay.scss";
import { ImgPicker } from "./ImgPicker";
import React from "react";
import { useProduct } from "../../state/contexts/productContext";

export const ProductImgDisplay = (props: {}) => {
  const { product } = useProduct();
  const [selectedImg, setSelectedImg] = React.useState(product?.images[0]);
  return (
    <Col className="col-12 product__imgContainer rounded px-2 py-4">
      <Row className="mx-2 h-100">
        <ImgPicker setSelectedImg={setSelectedImg} selectedImg={selectedImg} />
        <Col className="d-flex col-10 h-100 justify-content-center align-items-center ">
          <Image src={selectedImg} className="w-75 product__img-main" />
        </Col>
      </Row>
    </Col>
  );
};
