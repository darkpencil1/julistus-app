import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ProductImgDisplay } from '../productPageComponents/ProductImgDisplay'
import Container from 'react-bootstrap/Container'
import { ProductText } from '../productPageComponents/ProductText'
import { AddToCartPanel } from '../productPageComponents/AddToCartPanel'

export const ProductPage = (props : {}) => {
  return (
    <Container fluid>
      <Row>
        <Col className="col-7">
          <Row className='mt-4 ms-4 justify-content-between'>
            <ProductImgDisplay />
            <ProductText />
          </Row> 
        </Col>
        <AddToCartPanel />
      </Row> 
    </Container>
  )
}

export default ProductPage;
