import { useState,useContext } from 'react';
import {  Button } from 'react-bootstrap';
import { CartContext } from "../contexts/CartContexts";
import '../../css/style.css'

export const ItemCount = ({stock,initial,showCantidad,item}) => {
  const [count, setCount] = useState(initial);
  const {addItem} = useContext(CartContext);
  const handleDecrease = () => {
    setCount((prev) => prev - 1);
  };
  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };
  const handleAdd = () => {
    if (stock >= initial) {
          addItem(item,count)
          setCount(initial)
    } else {
      alert("Este producto no está disponible!!");
    }
  };

  return (
    <div className='col-md-4 order-md-2 mb-4' id='container-count'>
      <td className='col' width={50}>
        <Button type="button" className='btn btn-danger' disabled={count<2} onClick={handleDecrease} > - </Button>
        <mark>{showCantidad && count}</mark>
        <Button type="button" className='btn btn-info' disabled={count === stock || stock < 1} onClick={handleIncrease}>+</Button>
      </td>
      <Button id='add-to-cart' variant='dark' onClick={handleAdd}>Agreagr al Carrito </Button>        
    </div>
  )
}