import React from 'react';
import { useAuth } from '../../context/index'
import {useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

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
        </div>
    );
}

export default Admindashboard;
