import { useEffect, useState } from "react";
import { useProduct } from "../../state/contexts/productContext";
import StyledProductText from "./ProductText.style";

const ProductText = () => {
  const [productClass, setProductClass] = useState<string>("");
  const { product } = useProduct();

  useEffect(() => {
    if (product?.productType === "poster") return setProductClass("juliste");
    else if (product?.productType === "tag") return setProductClass("merkki");
  }, [product]);

  return (
    <StyledProductText>
      <p className="product__text-class">{productClass}</p>
      <h2>{product?.name}</h2>
      <div className="product__text-desc-container">
        <p className="product__text-primer">{product?.primer}</p>
        <p className="product__text-desc">{product?.description}</p>
      </div>
    </StyledProductText>
  );
};
export default ProductText;
