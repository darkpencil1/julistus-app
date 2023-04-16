import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import tasha from '../../resources/images/tasha-1.webp'
import './ProductImgDisplay.scss';
import { ImgPicker } from './ImgPicker';

export const ProductImgDisplay = (props : {}) => {
  return (
    <Col className='col-7 productImg__container px-2 py-4'>
      <Row className='mx-2'>    
        <ImgPicker />
        <Col className='col-10'>
          <Image src={tasha} fluid/>
        </Col>
      </Row>    
    </Col>
  )
}
