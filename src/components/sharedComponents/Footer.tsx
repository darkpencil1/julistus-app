import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import ig_Logo from '../../resources/images/Instagram_logo_2016.svg'

export const Footer = (props : {}) => {
  return (
    <Container className='mx-0 p-0' fluid >
      <footer className="py-3 my-4 mx-5" >
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
        </ul>
        <div className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 ">
          <Col className="col-md-4 d-flex align-items-center">
            <span className="mb-3 mb-md-0 text-body-secondary">&copy; 2023 Julistus</span>
          </Col>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3"><a className="text-body-secondary" href="#"><img src={ig_Logo} className="bi" width="24" height="24" /></a></li>
          </ul>
        </div>
      </footer>
    </Container>
      
  )
}
