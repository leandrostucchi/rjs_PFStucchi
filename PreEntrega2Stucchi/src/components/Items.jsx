import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const Item =(item) => {
  return(
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{item.category}</Card.Title>
            <Card.Text>
                Tipo ${item.type} Modelo ${item.model} Procesador ${item.procesador}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
    );
};




        