import {useEffect,useState } from "react";
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { getFirestore, getDocs, collection } from "firebase/firestore";

export const Categories = () => {
    const  [dataList, setDataList] = useState([]);	

    useEffect(() => {
        const db = getFirestore();
        const refCollection = collection(db, "items");
        getDocs(refCollection).then((snapshot) => {
            if (snapshot.size === 0) console.log("no results");
                else
                setDataList(snapshot.docs.map((doc) => {return { id: doc.id, ...doc.data() }; })
            );
        });
    }, []);

    const uniqueCategories = [ ...new Set(dataList.map(item => item.category) )];

    return (
            <Nav className="me-auto">
                {[...uniqueCategories].map(category => (
                <Nav.Link as={NavLink} key={category} to={`/category/${category}`}>
                        <span className='Nav-Link nav-item'>{category}</span>
                </Nav.Link>
                ))}
            </Nav>
            )
 }