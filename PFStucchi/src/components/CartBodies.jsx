import Button from 'react-bootstrap/Button';
import { Container } from "react-bootstrap";
import { CartContext } from "../contexts/CartContexts";
import {useContext } from "react";

export const CartBodies = ({ite}) => {
  const {removeItem} = useContext(CartContext); 
  return (
    <Container>
        <table className="table mt-4">
            <tr>
              <th scope="row">{ite.description}</th>
              <th scope="row">{ite.quantity}</th>
              <th scope="row">{ite.price}</th>
              <th scope="row">{ite.price * ite.quantity}</th>
              <Button onClick={() => removeItem(ite.id)}>X</Button>
            </tr>
        </table>          
    </Container>
  );
}