import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import StyledProductImg from "./ProductImage.style";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

type ProductImgProps = {
  selectedImg: string | undefined;
};

const ProductImg = ({ selectedImg }: ProductImgProps) => {
  // Force re-render of the Zoom component by updating a key
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Update the key when the selectedImg prop changes
    setKey((prevKey) => prevKey + 1);
  }, [selectedImg]);

  return (
    <StyledProductImg>
      <Zoom key={key}>
        <motion.img
          animate={{ translateY: [30, 0] }}
          transition={{ duration: 0.4 }}
          src={selectedImg}
          className="product__img"
          key={selectedImg}
        />
      </Zoom>
    </StyledProductImg>
  );
};
export default ProductImg;
