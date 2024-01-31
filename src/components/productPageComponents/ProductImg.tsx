import { motion } from "framer-motion";
import StyledProductImg from "./ProductImage.style";

type ProductImgProps = {
  selectedImg: string | undefined;
};
const ProductImg = ({ selectedImg }: ProductImgProps) => {
  return (
    <StyledProductImg>
      <motion.img
        animate={{ translateY: [30, 0] }}
        transition={{ duration: 0.4 }}
        src={selectedImg}
        className="product__img"
        key={selectedImg}
      />
    </StyledProductImg>
  );
};
export default ProductImg;
