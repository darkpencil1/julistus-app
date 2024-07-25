import { useNavigate } from "react-router-dom";
import Col from "../baseComponents/Col.style";
import Row from "../baseComponents/Row.style";
import Image from "../baseComponents/Image.style";
import Button from "../baseComponents/Button";
import IProduct from "../../../../shared/types/ProductInterface";
import StyledProductItem from "./ProductItem.style";

const ProductItem: React.FC<{ product: IProduct }> = ({ product }) => {
  const { id, imageUrl, name, snapshot, productType, price } = product;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/tuote?id=${id}`);
  };

  const setProductType = () => {
    return productType === "poster" ? "Tehtäväjuliste" : "Saavutusmerkki";
  };

  return (
    <StyledProductItem>
      <Col className="product__img-container">
        <Image
          className={`product__img ${
            productType === "tag" ? "product__img--tag" : ""
          }`}
          src={`${imageUrl}`}
          alt={name}
        />
      </Col>
      <Row className="product__text-container">
        <h2 className="product__title">{name}</h2>
        <small className="product__type">- {setProductType()} -</small>
        <div className="product__text">{snapshot}</div>
        <Row className="product__price-and-button">
          <div className="product__price">
            <span>alkaen &nbsp;</span>
            <h4>{price}€</h4>
          </div>
          <Button
            className="product__cta"
            type="white"
            size="md"
            text="Katso"
            onClick={handleClick}
          />
        </Row>
      </Row>
    </StyledProductItem>
  );
};
export default ProductItem;
