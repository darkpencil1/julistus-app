import React, { useEffect } from "react";
import { ImgPicker } from "./ImgPicker";
import { useProduct } from "../../state/contexts/productContext";
import StyledProductImgContainer from "./ProductImgContainer.style";
import ProductImg from "./ProductImg";

const ProductImgContainer = () => {
  const { product } = useProduct();
  const [selectedImg, setSelectedImg] = React.useState(product?.images[0]);

  useEffect(() => {
    product && setSelectedImg(product.images[0]);
  }, [product]);

  return (
    <StyledProductImgContainer>
      <ProductImg selectedImg={selectedImg} />
      <ImgPicker setSelectedImg={setSelectedImg} selectedImg={selectedImg} />
    </StyledProductImgContainer>
  );
};
export default ProductImgContainer;
