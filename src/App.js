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
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/Register";
import { useAuth } from './context/index';
import Admindashboard from "./pages/admin/admindashboard";


function App() {
  const [allimages, setAllimages] = useState([]);
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);
  const { currentUser,userinfo } = useAuth();

  

  return (
    <div className="container">
      
{currentUser?.email}

<p>{userinfo.name}</p>
<p>{userinfo.role}</p>


    <Routes>
          <Route path='/' element={<Home  />} />
          
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route  path='/adminDash' element={<Admindashboard />} />
       
       
        </Routes> 


      
    </div>
  );
}

export default App;
