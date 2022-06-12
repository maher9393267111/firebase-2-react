import logo from './logo.svg';
import './App.css';
import {useState,iseEffect} from 'react';
import {db,app} from './firebase/index';
import {getStorage,ref,getDownloadURL,uploadBytes} from 'firebase/storage';


function App() {

  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productImg, setProductImg] = useState(null);
  const [error, setError] = useState('');
  const [imageUrl, setImageURL] = useState('');




  const handleChangeImage = async (e) => {
    const file = e.target.files[0];
    console.log(file);
    
    const storage = getStorage();
    const testRef = ref(storage, `myimages/${file.name}`);
    console.log('testRef', testRef);
    await uploadBytes(testRef, file).then((snapshot) => {
      console.log('Uploaded image to storage success!');
    });
    const down = await getDownloadURL(testRef);
    setImageURL(down); 
   
  }














  return (
  
    <div className='container'>
    <br />
    <h2>ADD PRODUCTS</h2>
    <hr />
  

  <input type="file"  
  onChange={handleChangeImage}
  />


<button
// onClick={testDownloadImages}
>upload image</button>

<img
className='  mx-auto  w-20 h-20'

src={imageUrl} alt="" />



</div>




  );
}

export default App;
