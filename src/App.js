import logo from "./logo.svg";
import "./App.css";
import { useState, iseEffect } from "react";
import { db, app, storage, } from "./firebase/index";
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytes,
  listAll,
} from "firebase/storage";
import {setDoc,addDoc,collection} from "firebase/firestore";

function App() {
  const [allimages, setAllimages] = useState([]);
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);

  //send array of images to firebasestorage
  const sendImage = async (e) => {
    e.preventDefault();

    let file = e.target.files[0];
    // console.log(file);

    setImage(URL.createObjectURL(file));


    let data = addDoc(collection(db, "mahercOLLECTION"), {
      image: image,
      name:'maher gome'
    }).then(() => {
      console.log("Document successfully written!");
    }
    ).catch((error) => {
      console.error("Error writing document: ", error);
    }
    );




  };

  return (
    <div className="container">
      <br />
      <h2>ADD PRODUCTS {}</h2>
      <hr />

      <input type="file" multiple={true} onChange={sendImage} />

      <button
      // onClick={testDownloadImages}
      >
        upload image
      </button>

      <img className="  mx-auto  w-20 h-20" src={image} alt="" />
    </div>
  );
}

export default App;
