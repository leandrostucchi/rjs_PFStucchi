import { useState, useEffect } from "react";
import dataList from "../data/electroDomesticos";
import { useParams } from "react-router-dom";
import { ItemDetails } from "./ItemDetails";

export const ItemDetailsContainer = () => {
    const  [item, setItem] = useState(null);	
	const {id} = useParams();
	useEffect(() => {
		const electrosPromise = new Promise((resolve) => {
			setTimeout(() => {
				resolve(dataList);
			}, 2000)
		})
		electrosPromise.then(result => {
            const seleccion = result.find(fin => fin.id == id);
            setItem(seleccion);
		})
	}, []);
	
    if (!item) {
        return(<>Loading</>)
    }

	return (
		<div >
			<ItemDetails key={item.id} item={item}  />
		</div>
		);
}




