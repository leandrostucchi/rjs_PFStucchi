import carrito from '../assets/carrito.png'
import '../App.css'

export const CartWidget = () => {
    return (
        <div className='padre'>
            <div> 
                <img src = {carrito} alt =""  width= "100"/>
            </div>
            <p className='hijo'>21</p>
        </div>
    
    ) ;
}