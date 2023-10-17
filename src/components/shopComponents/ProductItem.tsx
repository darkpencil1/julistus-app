import { useNavigate } from "react-router-dom";
import Col from "../baseComponents/Col.style";
import Row from "../baseComponents/Row.style";
import Card from "../baseComponents/Card.style";
import Image from "../baseComponents/Image.style";
import Button from "../baseComponents/Button";
import { useProduct } from "../../state/contexts/productContext";
import IProduct, {
  Orientation,
} from "../../resources/interfaces/ProductInterface";
import StyledProductItem from "./ProductItem.style";

type ProductProps = {
  id: number;
  images: Array<string>;
  title_img: string;
  name: string;
  price: number;
  description: string;
  categories: Array<string>;
  orientation: Orientation;
};

export const ProductItem = (props: ProductProps) => {
  const {
    id,
    images,
    name,
    price,
    description,
    categories,
    title_img,
    orientation,
  } = props;
  const { selectProduct } = useProduct();
  const navigate = useNavigate();

  const handleClick = () => {
    const product: IProduct = {
      id: id,
      name: name,
      images: images,
      title_img: title_img,
      price: price,
      description: description,
      categories: categories,
      orientation: orientation,
    };
    selectProduct({ ...product });
    navigate(`/tuote?id=${name}`);
  };

  return (
    <StyledProductItem>
      <Card className="product__container">
        <Row className="product__content-container">
          <Col className="product__img-container">
            <Image className="product__img" src={props.images[0]} />
          </Col>
          <Row className="product__text-container">
            <h2 className="product__title">{props.name}</h2>
            <div className="product__text">{props.description}</div>
            {/*<div className="product__price">alkaen {props.price}€</div>*/}
            <Button
              className="product__cta"
              type="white"
              size="md"
              text="Katso"
              onClick={handleClick}
            />
          </Row>
        </Row>
      </Card>
    </StyledProductItem>
  );
};
