import logo from "./logo.svg";
import "./App.css";
import { useState, iseEffect } from "react";
import { db, app, storage } from "./firebase/index";
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytes,
  listAll,
} from "firebase/storage";
import { setDoc, addDoc, collection, doc } from "firebase/firestore";

import Home from "./pages/home";


function App() {
  const [allimages, setAllimages] = useState([]);
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);

  

  return (
    <div className="container">
      
    
<Home />


      
    </div>
  );
}

export default App;
