import { useContext } from "react";
import { CartContext } from "../contexts/CartContexts";

import { Link } from 'react-router-dom';
import carrito from '../assets/carrito.png'
import '../App.css'

export const CartWidget = () => {
    const {items} = useContext(CartContext);
    const total = items.reduce((accumulator, actual) => accumulator + actual.quantity, 0);
    return (
        <Link to="/cart">
        <div className='padre'>
            <div> 
                <img src = {carrito} alt =""  width= "100"/>
            </div>
            <p className='hijo'>{total}</p>
        </div>
        </Link>
    ) ;
}