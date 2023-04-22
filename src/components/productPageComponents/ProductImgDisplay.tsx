import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import tasha from '../../resources/images/tasha-1.webp'
import './ProductImgDisplay.scss';
import { ImgPicker } from './ImgPicker';
import React from 'react';

export const ProductImgDisplay = (props : {}) => {
  const [selectedImg, setSelectedImg] = React.useState(tasha)
  return (
    <Col className='col-12 productImg__container px-2 py-4'>
      <Row className='mx-2'>    
        <ImgPicker 
          setSelectedImg={setSelectedImg}
        />
        <Col className='col-10'>
          <Image src={selectedImg} fluid/>
        </Col>
      </Row>    
    </Col>
  )
}
