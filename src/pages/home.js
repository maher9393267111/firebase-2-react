import React from 'react';
import CreateCategory from '../components/createcategory';
import Childcategory from '../components/childcategory';
import CreateProduct from '../components/createProduct';
import AllProducts from '../components/AllProducts';
import { db, app, storage } from "../firebase/index";
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytes,
  listAll,
} from "firebase/storage";
import { setDoc, addDoc, collection, doc } from "firebase/firestore";

const Home = () => {
    return (
        <div>
            <h1>Home Pages</h1>


<div>



</div>






        </div>
    );
}

export default Home;
