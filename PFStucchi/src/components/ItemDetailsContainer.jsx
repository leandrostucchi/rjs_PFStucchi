import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetails } from "./ItemDetails";
import { getFirestore, getDoc, doc } from "firebase/firestore";


export const ItemDetailsContainer = () => {
    const  [item, setItem] = useState(null);	
	const  [loading, setLoading] = useState(true);	
	const {id} = useParams();
	
	useEffect(() => {
		const db = getFirestore();
		const refDoc = doc(db, "items", id);
		getDoc(refDoc)
		.then((snapshot) => {setItem({ id: snapshot.id, ...snapshot.data() });})
		.finally(() => setLoading(false))
	}, [id]);
	
    if (loading) { return(<>Loading</>)  }

	return (
		<div >
			<ItemDetails key={item.id} item={item} />
		</div>
	);
}