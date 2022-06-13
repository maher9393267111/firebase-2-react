import React from "react";
import { useState, useEffect, useContext } from "react";
import { db } from "../firebase/index";
import { getDoc, doc } from "firebase/firestore";
import { useAuth } from "../context";
const Login = () => {
  // find user in database
  const { currentUser } = useAuth();
  const [userfromstore, setUserfromstore] = useState({});

  
  return (
    <div>
      <h1>Login</h1>
      <h2></h2>
    </div>
  );
};

export default Login;
