import Col from "../baseComponents/Col.style";
import Image from "../baseComponents/Image.style";
import Row from "../baseComponents/Row.style";
import StyledReleaseProduct from "./ReleaseProduct.style";
import { Orientation } from "../../resources/interfaces/ProductInterface";

type ReleaseProductProps = {
  img: string;
  name: string;
  description: string;
  orientation: Orientation;
};

const ReleaseProduct = ({
  img,
  name,
  description,
  orientation,
}: ReleaseProductProps) => {
  return (
    <StyledReleaseProduct orientation={orientation}>
      <Row className="release__container">
        <Image className="release__img" src={img} />
        <Col className="release__text">
          <h1>{name}</h1>
          <p>{description}</p>
        </Col>
      </Row>
    </StyledReleaseProduct>
  );
};
export default ReleaseProduct;
