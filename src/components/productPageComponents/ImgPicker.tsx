import { useProduct } from "../../state/contexts/productContext";
import StyledImgPicker from "./ImgPicker.style";
import { motion } from "framer-motion";

type ImgPickerProps = {
  selectedImg: string | undefined;
  setSelectedImg: (img: string) => string | void;
};

export const ImgPicker = (props: ImgPickerProps) => {
  const { setSelectedImg, selectedImg } = props;
  const { product } = useProduct();

  const handleClick = (img: string, id: string) => {
    setSelectedImg(img);
    const clickedImg = document.getElementById(id);
    clickedImg?.scrollIntoView({
      inline: "center",
      block: "nearest",
      behavior: "smooth",
    });
  };

  return (
    <StyledImgPicker>
      <div className="img-picker__container">
        {product?.images.map((img: string, i: number) => {
          const id = `img-picker-${i}`;
          const isSelectedImg = selectedImg === img ? true : false;
          return (
            <div
              id={`${id}-container`}
              className={`img-picker__img-container ${
                isSelectedImg && "img-picker__img-container--selected"
              }`}
              onClick={() => handleClick(img, id)}
              key={i}
            >
              <motion.img
                id={`${id}`}
                src={img}
                className="picker__thumbnail-img"
                key={img}
              />
            </div>
          );
        })}
      </div>
    </StyledImgPicker>
  );
};
