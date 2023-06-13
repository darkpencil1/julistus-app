import React, { useEffect } from "react";
import Col from "../baseComponents/Col.style";
import Row from "../baseComponents/Row.style";
import Image from "../baseComponents/Image.style";
import { useProduct } from "../../state/contexts/productContext";
import StyledImgPicker from "./ImgPicker.style";

type ImgPickerProps = {
  selectedImg: string | undefined;
  setSelectedImg: Function;
};

const SELECTED_IMG_STYLE = {
  border: "solid 0.2rem rgba(var(--bs-primary-rgb), 0.5)",
};

export const ImgPicker = (props: ImgPickerProps) => {
  const { setSelectedImg, selectedImg } = props;
  const { product } = useProduct();
  useEffect(() => {}, [selectedImg]);

  return (
    <StyledImgPicker>
      <Row className="thumbnail__container">
        {product?.images.map((img, i) => {
          return (
            <Col
              className="img__container"
              style={
                selectedImg === img
                  ? (SELECTED_IMG_STYLE as React.CSSProperties)
                  : {}
              }
              onClick={() => setSelectedImg(img)}
              key={i}
            >
              <Image src={img} className="thumbnail__img" />
            </Col>
          );
        })}
      </Row>
    </StyledImgPicker>
  );
};
