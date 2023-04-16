import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import logo from '../../resources/images/logo1.png'

const Header: React.FC = (props:any) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">
          <Image 
            src={logo}
            width="150rem"
            className="d-inline-block align-top"
            alt="Julistus"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="mb-2 mb-md-0 ms-auto">
            <Nav.Link className="px-2 text-primary fw-semibold fs-5" href="/">Koti</Nav.Link>
            <Nav.Link className="px-2 text-primary fw-semibold fs-5" href="kauppa">Kauppa</Nav.Link>
            <Nav.Link className="px-2 text-primary fw-semibold fs-5" href="missio">Missio</Nav.Link>
            <Nav.Link className="px-2 text-primary fw-semibold fs-5" href="meistä">Meistä</Nav.Link>
          </Nav>
          <Button type="button" className="btn-sm mx-2 btn-secondary">Login</Button>
          <Button type="button" className="btn-sm btn-primary">Sign-up</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
