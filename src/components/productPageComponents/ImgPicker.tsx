import React from "react";
import Col from "../baseComponents/Col.style";
import Image from "../baseComponents/Image.style";
import { useProduct } from "../../state/contexts/productContext";
import StyledImgPicker from "./ImgPicker.style";

type ImgPickerProps = {
  selectedImg: string | undefined;
  setSelectedImg: (img: string) => string | void;
};

const SELECTED_IMG_STYLE = {
  border: "solid 0.2rem rgba(var(--bs-primary-rgb), 0.5)",
};

export const ImgPicker = (props: ImgPickerProps) => {
  const { setSelectedImg, selectedImg } = props;
  const { product } = useProduct();

  return (
    <StyledImgPicker>
      {product?.images.map((img: string, i: number) => {
        return (
          <div
            className="picker__img-container"
            style={
              selectedImg === img
                ? (SELECTED_IMG_STYLE as React.CSSProperties)
                : {}
            }
            onClick={() => setSelectedImg(img)}
            key={i}
          >
            <Image src={img} className="picker__thumbnail-img" />
          </div>
        );
      })}
    </StyledImgPicker>
  );
};
