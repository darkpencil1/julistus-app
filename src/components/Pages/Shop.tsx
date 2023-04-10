import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import tasha  from '../../resources/images/tasha-1.webp'
import inventor from '../../resources/images/inventor-1.webp'
import bard from '../../resources/images/bard-1.webp'
import bladesinger from '../../resources/images/bladesinger-1.webp'
import "../../resources/styles/css/shop.css"
import { Product } from '../shopComponents/Product';
interface Props {
  // add any props here
}
const products = [
  {
    id: 1,
    name: 'Product 1',
    category1: 'Mieli',
    category2: 'Työ',
    price: '€10.00',
    image: inventor
  },
  {
    id: 2,
    name: 'Product 2',
    category1: 'Mieli',
    category2: 'Harjoittelu',
    price: '€12.00',
    image: bard
  },
  {
    id: 3,
    name: 'Product 3',
    category1: 'Työ',
    category2: 'Harjoittelu',
    price: '€15.00',
    image: bladesinger
  },
  {
    id: 4,
    name: 'Product 4',
    category1: 'Mieli',
    category2: 'Inspiraatio',
    price: '€20.00',
    image: bladesinger
  },
  {
    id: 5,
    name: 'Product 1',
    category1: 'Mieli',
    category2: 'Työ',
    price: '€10.00',
    image: inventor
  },
  {
    id: 6,
    name: 'Product 2',
    category1: 'Mieli',
    category2: 'Harjoittelu',
    price: '€12.00',
    image: bard
  },
  {
    id: 7,
    name: 'Product 3',
    category1: 'Työ',
    category2: 'Harjoittelu',
    price: '€15.00',
    image: bladesinger
  },
  {
    id: 8,
    name: 'Product 4',
    category1: 'Mieli',
    category2: 'Inspiraatio',
    price: '€20.00',
    image: bladesinger
  },
  // Add more products here if needed
];

const Shop: React.FC<Props> = (props) => {
  return (
    <div>
      {/* Banner */}
      <Container className='p-0' fluid>
        <Row className='w-100 m-0'>
          <Col className='col-lg-12 p-0 shop-banner'>
            <Image src={tasha} className="shop-banner-img w-100"/>
          </Col>
        </Row>
      </Container>

 {/* Product rows */}
  <div className="album py-5 mx-5">
      <Container fluid>
        <Row className='align-items-start gx-5 gy-3'>
          {products.map((product, i) => (
            <Product 
              id = {product.id}
              image = {product.image}
              name = {product.name}
              price= {product.price}
              category1= {product.category1}
              category2= {product.category2}
              key={i}/>
          ))}
        </Row>
      </Container>
    </div>
  </div>
  );
};

export default Shop;

