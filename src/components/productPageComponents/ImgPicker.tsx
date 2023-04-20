import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import tasha from '../../resources/images/tasha-1.webp'
import './ImgPicker.scss';

export const ImgPicker = (props : {}) => {

  return (
    <Col className='col-2'>
      <Row className='gy-3 h-100 justify-content-center'>    
        <Col className='col-12 py-4 imgThumbnail__container rounded position-relative'>
          <Image src={tasha} className='w-100 px-1 position-absolute top-50 start-50 translate-middle rounded' fluid/>
        </Col>
        <Col className='col-12 py-4 imgThumbnail__container rounded position-relative'>
          <Image src={tasha} className='w-100 px-1 position-absolute top-50 start-50 translate-middle rounded' fluid/>
        </Col>
        <Col className='col-12 py-4 imgThumbnail__container rounded position-relative'>
          <Image src={tasha} className='w-100 px-1 position-absolute top-50 start-50 translate-middle rounded' fluid/>
        </Col>
      </Row>    
    </Col>
  )
}
