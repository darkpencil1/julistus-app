import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import flag from '../../resources/images/Finland.webp'
import smileface from '../../resources/images/smileface.webp'
import checkmark from '../../resources/images/checkmark.webp'
import "./ShopBannerInfo.scss"


const info = [
  {
    text: "Kotimainen",
    img: flag 
  },
  {
    text: "Toimitus 3 arkipäivää",
    img: checkmark 
  },
  {
    text: "14pv palautusoikeus",
    img: smileface 
  },
]

export const ShopBannerInfo = (props : {}) => {
  return (
  <Col className='banner__iconContainer align-self-end col-auto mb-4 ms-2 p-2 rounded text-center'>
      <Row className=''>   
        {
          info.map((item, i) => {
            return (
              <Col className='col-auto mx-4' key={i}>
                <Image src={item.img} className='banner__icon me-2' />
                <span className='fw-semibold'>{item.text}</span>
              </Col>
            )
          })
        }  
      </Row>   
  </Col>
  )
}
