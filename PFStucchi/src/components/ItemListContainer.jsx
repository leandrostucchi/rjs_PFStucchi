import { useState, useEffect } from "react";
import dataList from "../data/electroDomesticos";
import Container from 'react-bootstrap/Container';

import { ItemList} from "./ItemList";
import { useParams } from "react-router-dom";

import { getFirestore, doc, getDoc } from 'firebase/firestore';


export const ItemListContainer = () => {
    const  [items, setItems] = useState([]);	
	const {id} = useParams();

	useEffect(() => {
		const electrosPromise = new Promise((resolve) => {
			setTimeout(() => {
				resolve(dataList);
			}, 2000)
		})
		electrosPromise.then(result => {
			if(id){
				const seleccion = result.filter(fil => fil.category === id);
				setItems(seleccion);
			}else{
				setItems(result);
			}
			
		})
	}, [id]);
	return (
		<Container className="mt-4">
			<ItemList key={items.id} item={items}/>
		</Container>
	);
}

