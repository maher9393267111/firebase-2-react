import React from "react";
import { useState, useEffect, useContext } from "react";
import { db } from "../firebase/index";
import { getDoc, doc } from "firebase/firestore";
import { useAuth } from "../context";
const Login = () => {
  // find user in database
  const { currentUser } = useAuth();
  const [userfromstore, setUserfromstore] = useState({});

  useEffect(() => {
    async function fetchuser() {
      if (currentUser) {
        const user = await getDoc(doc(db, "users", currentUser.email)).then(
          (res) => {
            console.log(res.data());
            setUserfromstore(res.data());
          }
        );
      }
    }

    fetchuser().catch(console.error);
  }, [currentUser]);

  return (
    <div>
      <h1>Login</h1>
      <h2>{userfromstore?.name}</h2>
    </div>
  );
};

export default Login;
