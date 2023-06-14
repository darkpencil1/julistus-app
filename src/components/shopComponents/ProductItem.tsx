import { useNavigate } from "react-router-dom";
import Col from "../baseComponents/Col.style";
import Row from "../baseComponents/Row.style";
import Card from "../baseComponents/Card.style";
import Image from "../baseComponents/Image.style";
import { useProduct } from "../../state/contexts/productContext";
import { Product } from "../../resources/interfaces/ProductInterface";
import StyledProductItem from "./ProductItem.style";
import Button from "../baseComponents/Button.style";

type ProductProps = {
  id: number;
  images: Array<string>;
  name: string;
  price: number;
  description: string;
  categories: Array<string>;
};

export const ProductItem = (props: ProductProps) => {
  const { id, images, name, price, description, categories } = props;
  const { selectProduct } = useProduct();
  const navigate = useNavigate();

  const handleClick = () => {
    const product: Product = {
      id: id,
      name: name,
      images: images,
      price: price,
      description: description,
      categories: categories,
    };
    selectProduct({ ...product });
    navigate(`/tuote?id=${name}`);
  };

  return (
    <StyledProductItem>
      <Card className="product__container" onClick={() => handleClick()}>
        <Row className="product__content-container">
          <Col className="product__img-container">
            <Image className="product__img" src={props.images[0]} />
          </Col>
          <Row className="product__text-container">
            <h3 className="product__title">{props.name}</h3>
            <div className="product__text">{props.description}</div>
            <div className="product__price">alkaen {props.price}€</div>
            <Button className="product__cta" secondary>
              Katso lisää
            </Button>
          </Row>
        </Row>
      </Card>
    </StyledProductItem>
  );
};
