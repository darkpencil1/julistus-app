import React from "react";
import { useNavigate } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import { PRODUCT_BG, CATEGORY_COL } from "./ProductStyles";
import { useProduct } from "../../state/contexts/productContext";
import { Product } from "../../resources/interfaces/ProductInterface";

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
  const [show, setShow] = React.useState(false);
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
    <Col className="col-md-3">
      <Card className="border-0">
        <div className="card-img-top">
          <div
            style={PRODUCT_BG as React.CSSProperties}
            className="justify-content-center align-items-center d-flex rounded-top"
            onClick={() => handleClick()}
          >
            <Image
              src={props.images[0]}
              className="p-3 img-fluid w-auto h-75"
            />
          </div>
        </div>
        <div className="card-body pt-2 ps-1 pe-0">
          <h3 className="card-title fs-5">{props.name}</h3>
          <Row className="ms-auto">
            {categories.map((cat, i) => {
              return (
                <Col
                  style={CATEGORY_COL as React.CSSProperties}
                  //Text wrap is optional
                  className="col-auto fs-6 border rounded m-1 text-wrap"
                  key={i}
                >
                  {" "}
                  {cat}{" "}
                </Col>
              );
            })}
          </Row>
          <div className="d-flex flex-row-reverse">
            <p className="text-body-secondary">alkaen {props.price}</p>
          </div>
        </div>
      </Card>
    </Col>
  );
};
