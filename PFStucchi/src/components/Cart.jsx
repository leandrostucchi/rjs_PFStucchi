import { useContext } from "react";
import { Container } from "react-bootstrap";

import { CartHead} from "./CartHead";
import { CartBodies } from "./CartBodies";
import { CheckOut } from "./CheckOut";

import { CartContext } from "../contexts/CartContexts";
import Button from 'react-bootstrap/Button';

export const Cart = () => {
   const {items,clear} = useContext(CartContext);
   console.log("datos ",items.length);
   let sumatoria = items.reduce((accumulator, actual) => accumulator + actual.quantity*actual.price, 0);
   return (
        <Container>
            <CartHead></CartHead>
            {items.length === 0 && <tr id="footer"> <th scope="row" colspan="5" >Carrito vacío - comience a comprar!</th> </tr>}
            {items.length !== 0 && items.map(ite => <CartBodies key={ite.id} ite= {ite}></CartBodies>)}
            {items.length !== 0 && <p>Total {sumatoria}</p>}
            <Button onClick ={clear}>Borrar Todo</Button>
            <CheckOut></CheckOut>
        </Container>
    );
}