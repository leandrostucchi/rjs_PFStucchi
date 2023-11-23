import { useState, useEffect } from "react";
import dataList from "../data/electroDomesticos";
import { useParams } from "react-router-dom";
import ImagenAMostrar  from './Imagenes';



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
	const imagenes = ImagenAMostrar(`${item.imagen}`);    
    return (
	<div>
        <h1>{item.category}</h1>
        <p>Tipo: {item.type}</p>
        <p>Modelo: {item.model}</p>
        <p> Procesador: {item.procesador}</p>
		<img src={imagenes} alt="" />
    </div>
	);
}




