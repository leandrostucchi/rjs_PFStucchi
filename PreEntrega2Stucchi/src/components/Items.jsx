import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const imagenes = require.context('../assets',true);

export const Item =({item}) => {
  return(
        <Card style={{ width: '18rem' }}>
          <Card.Img src={ imagenes`.${item.imagen}`} />
          <Card.Body>
            <Card.Title>{item.category}</Card.Title>
            <Card.Text>
                Tipo {item.type} Modelo {item.model} Procesador {item.procesador}
            </Card.Text>
           <Link to={`/item/${item.id}`}>
            <Button variant="primary">Go somewhere</Button>
            </Link>
          </Card.Body>
        </Card>
    );
};




        