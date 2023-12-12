import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ImagenAMostrar  from './Imagenes';

export const Item =({item}) => {
  const imagenes = ImagenAMostrar(`${item.imagen}`);
  return(
        <Card style={{ width: '18rem' }}>
          <Card.Img src={imagenes} alt="" width={200} height={200}/>
          <Card.Body>
            <Card.Title>{item.description}</Card.Title>
            <Card.Text>
                <p>Marca: {item.brand} </p>
                <p>Modelo: {item.type} </p>
                <p>Cantidad: {item.stock} </p>
                <p>Precio: $  {item.price}</p>
            </Card.Text>
           <Link to={`/item/${item.id}`}>
            <Button variant="primary">Detalle</Button>
            </Link>
          </Card.Body>
        </Card>
    );
};