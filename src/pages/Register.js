import React, { useState,useRef,useEffect } from 'react';
import { AiFillLock, AiOutlineMail } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/index';
import {ref, uploadBytes, getStorage, getDownloadURL} from 'firebase/storage';
import {GrUpload} from 'react-icons/gr'

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');

const uploadref = useRef(null);


  const navigate = useNavigate();
  const { signUp } = useAuth();



// handel i=click upload icon input file clicked
    const handleUpload = (e) => {
        e.preventDefault();
        uploadref.current.click();
    }



  const handleChangeImage = async (e) => {
    const file = e.target.files[0];
    console.log(file);


    
    const storage = getStorage();
    const testRef = ref(storage, `myimages/${file.name}`);
    console.log('testRef', testRef);
    // send image file to storage with test ref info
    await uploadBytes(testRef, file).then((snapshot) => {
      console.log('Uploaded image to storage success!');
    });

    // get image url from storage and set into state
    const down = await getDownloadURL(testRef);
    setImage(down); 
   
  }




  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {

        console.log('name', name);
      await signUp(email,password,name,image)
    //  navigate('/account')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  }

  return (
    <div>
    <div className='max-w-[400px] mx-auto min-h-[600px] px-4 py-20'>
      <h1 className='text-2xl font-bold'>Sign Up</h1>
      {error ? <p className='bg-red-300 p-3 my-2'>{error}</p> : null}
      <form onSubmit={handleSubmit}>

      <div className='my-4'>
          <label>Name</label>
          <div className='my-2 w-full relative rounded-2xl shadow-xl'>
            <input
              onChange={(e) => setName(e.target.value)}
              className='w-full p-2 bg-primary border border-input rounded-2xl'
              type='text'
            />
            <AiOutlineMail className='absolute right-2 top-3 text-gray-400' />
          </div>
        </div>



        <div className='my-4'>
          <label>Email</label>
          <div className='my-2 w-full relative rounded-2xl shadow-xl'>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className='w-full p-2 bg-primary border border-input rounded-2xl'
              type='email'
            />
            <AiOutlineMail className='absolute right-2 top-3 text-gray-400' />
          </div>
        </div>
        <div className='my-4'>
          <label>Password</label>
          <div className='my-2 w-full relative rounded-2xl shadow-xl'>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className='w-full p-2 bg-primary border border-input rounded-2xl'
              type='password'
            />
            <AiFillLock className='absolute right-2 top-3 text-gray-400' />
          </div>
        </div>




{/* ----upload image- */}

<div className='my-4'>
          <label
          onClick={handleUpload}
          
          ><GrUpload
          className=' text-[40px] mt-12 ml-12 mr-12 mb-6'
          
          /></label>
          <div className='my-2 w-full relative rounded-2xl shadow-xl'>
            <input

            ref={uploadref}
              onChange={handleChangeImage}
              className='w-full p-2 hidden bg-primary border border-input rounded-2xl'
              type='file'
            />
            <AiFillLock className='absolute right-2 top-3 text-gray-400' />
          </div>
        </div>



        <button className='w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl'>
          Sign up
        </button>
      </form>
      <p className='my-4'>
        Already have an account?{' '}
        <Link to='/login' className='text-accent'>
          Sign in
        </Link>
      </p>
    </div>
  </div>
  );
};

export default Signup;