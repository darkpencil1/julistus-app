import { useState } from "react";
import Image from "../baseComponents/Image.style";
import { useProduct } from "../../state/contexts/productContext";
import StyledProductImg from "./ProductImage.style";

const ProductImg = () => {
  const { product } = useProduct();
  const [selectedImg] = useState(product?.images[0]);

  return (
    <StyledProductImg>
      <Image src={selectedImg} className="product__img" />
    </StyledProductImg>
  );
};
export default ProductImg;
