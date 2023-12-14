import Container from 'react-bootstrap/Container';
import ImagenAMostrar  from './Imagenes';
import { ItemCount } from "./ItemCount";

export const ItemDetails = ({item})  => {
    const imagenes = ImagenAMostrar(`${item.imagen}`);    
    return (
        <Container>
            <div>
                <h3>{item.description}</h3>
                <p>Marca: {item.brand}</p>
                <p>Modelo: {item.type}</p>
                <p>Precio: $ {item.price}</p>
                <img src={imagenes} alt="" />
                {<ItemCount stock={item.stock} initial={1} showCantidad={true} item= {item}/>}
            </div>
        </Container>      
    );
}