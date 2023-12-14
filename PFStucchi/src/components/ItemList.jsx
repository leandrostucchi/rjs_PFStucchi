import Container from 'react-bootstrap/Container';
import {Item}  from "./Items";

export const ItemList = ({item})  => {
    return (
        <Container>
           {item.map(ite => <Item key={ite.id} item={ite} />)}            
        </Container>
    );
}



