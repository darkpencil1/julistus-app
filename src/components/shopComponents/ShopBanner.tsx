import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ShopBannerInfo } from './ShopBannerInfo';
import "./ShopBanner.scss";

export const ShopBanner = (props : {}) => {
  return (
      <Container className='p-0 banner__container' fluid>
        <Row className='w-100 m-0 h-100'>
          <Col className='col-lg-12 p-0'>
          </Col>
          <ShopBannerInfo />
        </Row>
      </Container>
  )
}
