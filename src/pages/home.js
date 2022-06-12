import React from 'react';
import CreateCategory from '../components/createcategory';
import Childcategory from '../components/childcategory';
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

{/* ----create category---- */}

<div>

<CreateCategory />

</div>




{/* ----create child category---- */}


<div>


<Childcategory/>

</div>






        </div>
    );
}

export default Home;
