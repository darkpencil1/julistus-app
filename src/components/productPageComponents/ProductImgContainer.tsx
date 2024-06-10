import React, { useEffect } from "react";
import { ImgPicker } from "./ImgPicker";
import StyledProductImgContainer from "./ProductImgContainer.style";
import ProductImg from "./ProductImg";
import { useAppContext } from "../../state/contexts/AppContextProvider";

const ProductImgContainer = () => {
  const { state } = useAppContext();
  const { product } = state;
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
