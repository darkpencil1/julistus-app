import Row from 'react-bootstrap/Row'
import { ProductImgDisplay } from '../productPageComponents/ProductImgDisplay'
import Container from 'react-bootstrap/Container'
import { ProductText } from '../productPageComponents/ProductText'
import { AddToCartPanel } from '../productPageComponents/AddToCartPanel'

export const ProductPage = (props : {}) => {
  return (
    <Container fluid>
      <Row className='mt-4 ms-4'>
        <ProductImgDisplay />
        <AddToCartPanel />
        <ProductText />
      </Row> 
    </Container>
  )
}

export default ProductPage;
