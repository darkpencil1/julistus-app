import { useEffect, useState } from "react";
import { useAppContext } from "../../state/contexts/AppContextProvider";
import StyledProductText from "./ProductText.style";

const ProductText = () => {
  const [productClass, setProductClass] = useState<string>("");
  const { state } = useAppContext();
  const { product } = state;

  useEffect(() => {
    if (product?.productType === "poster")
      return setProductClass("Quest poster");
    else if (product?.productType === "tag")
      return setProductClass("Achievement tag");
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
