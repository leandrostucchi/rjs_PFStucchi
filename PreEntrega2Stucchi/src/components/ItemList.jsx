import Container from 'react-bootstrap/Container';
import { Item } from "./Items";


export const ItemList = ( {item} ) => {
    return (
        <Container>
            {item.map(electro => <Item key="electro" electros={electro} />)}
        </Container>
    );
}