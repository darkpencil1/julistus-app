import { useProduct } from "../../state/contexts/productContext";
import StyledProductText from "./ProductText.style";

const ProductText = () => {
  const { product } = useProduct();
  return (
    <StyledProductText>
      <p className="product__text-class">{product?.class}</p>
      <h2>{product?.name}</h2>
      <p>{product?.description}</p>
    </StyledProductText>
  );
};
export default ProductText;
