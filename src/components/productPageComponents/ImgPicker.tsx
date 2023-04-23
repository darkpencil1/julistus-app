import React, { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import { useProduct } from "../../state/contexts/productContext";
import "./ImgPicker.scss";

type ImgPickerProps = {
  selectedImg: string | undefined;
  setSelectedImg: Function;
};

const SELECTED_IMG_STYLE = {
  border: "solid 0.2rem rgba(var(--bs-primary-rgb), 0.5)",
};

const DEFAULT_IMG_STYLE = {};

export const ImgPicker = (props: ImgPickerProps) => {
  const { setSelectedImg, selectedImg } = props;
  const { product } = useProduct();
  useEffect(() => {}, [selectedImg]);

  const setSelected = () => {};

  return (
    <Col className="col-2">
      <Row className="gy-3 h-100 justify-content-center">
        {product?.images.map((img, i) => {
          return (
            <Col
              className="col-12 py-4 imgThumbnail__container rounded position-relative"
              style={
                selectedImg === img
                  ? (SELECTED_IMG_STYLE as React.CSSProperties)
                  : {}
              }
              onClick={() => setSelectedImg(img)}
              key={i}
            >
              <Image
                src={img}
                className="w-100 px-1 position-absolute top-50 start-50 translate-middle rounded"
                fluid
              />
            </Col>
          );
        })}
      </Row>
    </Col>
  );
};
