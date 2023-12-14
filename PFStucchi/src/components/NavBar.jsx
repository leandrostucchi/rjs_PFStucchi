import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Categories } from '../hooks/useCategories';
import { CartWidget } from './CartWidget';

export const NavBar =  () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>Electro Domestico</Navbar.Brand>
        </NavLink>
        <Categories></Categories>
      </Container>
      <CartWidget/> 
    </Navbar>
  );
}