import Image from "../baseComponents/Image.style";
import StyledProductImg from "./ProductImage.style";

type ProductImgProps = {
  selectedImg: string | undefined;
};
const ProductImg = ({ selectedImg }: ProductImgProps) => {
  return (
    <StyledProductImg>
      <Image src={selectedImg} className="product__img" />
    </StyledProductImg>
  );
};
export default ProductImg;
