import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ImagenAMostrar  from './Imagenes';



export const Item =({item}) => {
  const imagenes = ImagenAMostrar(`${item.imagen}`);
  return(
        <Card style={{ width: '18rem' }}>
          <Card.Img src={imagenes} alt=""/>
          <Card.Body>
            <Card.Title>{item.category}</Card.Title>
            <Card.Text>
                Tipo: {item.type} Modelo: {item.model} Procesador: {item.procesador}
            </Card.Text>
           <Link to={`/item/${item.id}`}>
            <Button variant="primary">Detalle</Button>
            </Link>
          </Card.Body>
        </Card>
    );
};