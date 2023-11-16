import { useState, useEffect } from "react";
import dataList from "../data/electroDomesticos";
import Container from 'react-bootstrap/Container';
import { ItemList} from "./ItemList";

export const ItemListContainer = () => {
    const  [items, setItems] = useState([]);	
	useEffect(() => {
		const electrosPromise = new Promise((resolve) => {
			setTimeout(() => {
				resolve(dataList);
			}, 2000)
		})
		electrosPromise.then(result => {
			setItems(result);
	
		})
	}, []);
	return (
	<Container className="mt-4">
		<ItemList items={items}  />
	</Container>
	);
}