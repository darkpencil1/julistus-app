import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const Header: React.FC = (props:any) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Julistus</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="mb-2 mb-md-0 ms-auto">
            <Nav.Link className="px-2 bs-primary" href="/">Koti</Nav.Link>
            <Nav.Link className="px-2" href="kauppa">Kauppa</Nav.Link>
            <Nav.Link className="px-2" href="missio">Missio</Nav.Link>
            <Nav.Link className="px-2" href="meistä">Meistä</Nav.Link>
          </Nav>
          <Button type="button" className="btn-sm mx-2 btn-secondary">Login</Button>
          <Button type="button" className="btn-sm btn-primary">Sign-up</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
