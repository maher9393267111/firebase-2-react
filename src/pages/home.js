import React from 'react';
import { useStore } from '../redux/zutstore';
// import CreateCategory from '../components/createcategory';
// import Childcategory from '../components/childcategory';
// import CreateProduct from '../components/createProduct';
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
    const title = useStore(state => state.formState.title);

    const setTitle = useStore(state => state.setTitle);




    return (
        <div>
            <h1>Home Pages</h1>



            {title}

<input
    className="w-80  border-2 border-Blue-500 focus:border-Teal-600 text-midnight text-[#18181b] font-serif text-base indent-1  placeholder:text-[#9ca3af] placeholder:text-center italic outline-none"
    type="text"
    placeholder="Ne yapılması gerekiyor ? "
    required
    value={title}
    onChange={setTitle}
  />

<div>



</div>






        </div>
    );
}

export default Home;
