import React from 'react';
import { useEffect,useState } from 'react';
import { db, app, storage } from '../firebase/index';
import {
    setDoc,
    addDoc,
    collection,
    doc,
    
    updateDoc,
    onSnapshot,
  } from "firebase/firestore";

const AllProducts = () => {

    const [products, setProducts] = useState([]);


useEffect(() => {

    const unsub = onSnapshot(collection(db, "products"), (snapshot) => {
        let productsfetch = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setProducts(productsfetch);
        console.log(productsfetch);
        }
    );
        



}, []);


    return (
        <div>
<div>
    <h1>ALl products</h1>
</div>






        </div>
    );
}

export default AllProducts;
