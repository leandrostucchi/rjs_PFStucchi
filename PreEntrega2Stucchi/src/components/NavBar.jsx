



import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import { CartWidget } from './CartWidget';


export const NavBar =  () => {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#electrodomestico">Electro Domestico</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#informatica">Informatica</Nav.Link>
            <Nav.Link href="#hogar">Hogar</Nav.Link>
            <Nav.Link href="#airelibre">Aire Libre</Nav.Link>
          </Nav>
        </Container>
        <CartWidget/> 
      </Navbar>
      

    </>
  );
}