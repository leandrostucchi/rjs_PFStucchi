import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import { CartWidget } from './CartWidget';
import {uniqueCategories} from '../hooks/useCategories';

export const NavBar =  () => {
  return (
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
         <NavLink to="/">
              <Navbar.Brand>Electro Domestico</Navbar.Brand>
           </NavLink>
          <Nav className="me-auto">
            {uniqueCategories.map(item => <Nav.Link as = {NavLink} key={item} to={`/category/${item}`}>{item}</Nav.Link>)}
          </Nav>
        </Container>
        <CartWidget/> 
      </Navbar>
  );
}