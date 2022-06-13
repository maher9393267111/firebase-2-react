import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    sendEmailVerification,
    sendSignInLinkToEmail,
    updateProfile,

  } from 'firebase/auth';

  import { doc, setDoc,getDoc } from 'firebase/firestore';
  import { useState } from 'react';
  import { useEffect } from 'react';
  import { useContext } from 'react';
  import { createContext } from 'react';
  import { auth,db } from '../firebase/index';
  
  const authContext = createContext();
  
  export const useAuth = () => {
    return useContext(authContext);
  };
  
  const AuthContext = ({ children }) => {
    
  

    const [currentUser, setUser] = useState({});
    const [userfromstore, setUserfromstore] = useState({});

    const signUp = async(email, password,name,image) => {
      createUserWithEmailAndPassword(auth, email, password);


// await updateProfile(auth, {
//     displayName: name,
//     photoURL: image
//     });



      // set rules read and write if true
      // create  collection name is users --> doc name(id) is user gmail  ----> data is empty array wishlist
      return setDoc(doc(db, 'users', email), {
        name:name,
        role: 'user'  ,
        watchList: [],
        image:image,
        email: email,
        password: password,
        cart: [],
        onder: [],
      });


    };
    const signIn = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    const logout = () => {
      return signOut(auth);
    };







   
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {

        if (user) {
            // User is signed in.
           
            setUser(user);
            console.log('user status changed: ', user.email,user.uid);





//  getDoc(doc(db, 'users',user.email )).then((doc) => {
//     console.log('doc', doc);
//     setUserfromstore(doc.data());
//     console.log('userfromstore-------->', userfromstore);
//     }

    
//     );

        }




     
     
      });
      return unsubscribe;
    }, []);
  
    const value = {
       signUp, signIn, logout, currentUser
    };
    return <authContext.Provider {...{ value }}>{children}</authContext.Provider>;
  };
  
  export default AuthContext;