import { useNavigate } from "react-router-dom";
import Col from "../baseComponents/Col.style";
import Row from "../baseComponents/Row.style";
import Image from "../baseComponents/Image.style";
import Button from "../baseComponents/Button";
import IProduct from "../../resources/interfaces/ProductInterface";
import StyledProductItem from "./ProductItem.style";
import { useAppContext } from "../../state/contexts/AppContextProvider";

const ProductItem: React.FC<{ product: IProduct }> = ({ product }) => {
  const { id, images, name, snapshot, productType } = product;
  const { setProduct } = useAppContext();
  const navigate = useNavigate();

  const handleClick = () => {
    setProduct(id);
    navigate(`/tuote?id=${id}`);
  };

  return (
    <StyledProductItem>
      <Col className="product__img-container">
        <Image
          className={`product__img ${
            productType === "tag" ? "product__img--tag" : ""
          }`}
          src={images[0]}
        />
      </Col>
      <Row className="product__text-container">
        <h2 className="product__title">{name}</h2>
        <div className="product__text">{snapshot}</div>
        {/*<div className="product__price">alkaen {props.price}€</div>*/}
        <Button
          className="product__cta"
          type="white"
          size="md"
          text="Katso"
          onClick={handleClick}
        />
      </Row>
    </StyledProductItem>
  );
};
export default ProductItem;
