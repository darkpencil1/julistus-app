import React from "react";
import { ImgPicker } from "./ImgPicker";
import { useProduct } from "../../state/contexts/productContext";
import StyledProductImgContainer from "./ProductImgContainer.style";
import ProductImg from "./ProductImg";

const ProductImgContainer = () => {
  const { product } = useProduct();
  const [selectedImg, setSelectedImg] = React.useState(product?.images[0]);
  return (
    <StyledProductImgContainer>
      <ProductImg />
      <ImgPicker setSelectedImg={setSelectedImg} selectedImg={selectedImg} />
    </StyledProductImgContainer>
  );
};
export default ProductImgContainer;
