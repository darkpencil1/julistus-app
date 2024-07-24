import Col from "../baseComponents/Col.style";
import Row from "../baseComponents/Row.style";
import Image from "../baseComponents/Image.style";
import StyledNewReleases from "./NewReleases.style";
import ReleaseProduct from "./ReleaseProduct";
import tree from "../../resources/images/puu.png";
import products from "../../resources/misc/products";

export const NewReleases = () => {
  return (
    <StyledNewReleases>
      <Row className="releases__banner">
        <Col className="releases__banner-text">
          <h1>Avajaistehtävät</h1>
          <p>
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </p>
        </Col>
        <Col className="releases__banner-img-container">
          <Image src={tree} className="releases__banner-img" />
        </Col>
      </Row>
      <Row className="releases__item-container">
        {products.slice(0, 3).map((product, i: number) => (
          <ReleaseProduct
            img={product.images[0]}
            name={product.name}
            description={product.description}
            orientation={product.orientation}
            key={i}
          />
        ))}
      </Row>
    </StyledNewReleases>
  );
};
