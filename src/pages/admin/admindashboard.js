import React from 'react';
import { useAuth } from '../../context/index'
import {useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

import AllProducts from '../../components/AllProducts';
import CreateCategory from '../../components/createcategory';
import CreateChildCategory from '../../components/childcategory';
import CreateProduct from '../../components/createProduct';
const Admindashboard = () => {

    const { userinfo } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(userinfo);
if(userinfo.role==='user'){
    console.log('not admin');
  navigate('/');
}



    }, [userinfo]);




    return (
        <div>
            <h1>Admin Dashboard</h1>


<div>

<CreateCategory/>

<CreateChildCategory/>


<div>

    
<CreateProduct/>
</div>






</div>



        </div>
    );
}

export default Admindashboard;
