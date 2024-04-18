import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, GoogleAuthProvider,  FacebookAuthProvider } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const AuthContext = createContext({});

export const UseAuthContext =()=>{
    const authContext = useContext(AuthContext);
    return authContext; 
}

const FirebaseProvider = ({children}) => {

  const[user, setUser] = useState([]);
  const[loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();


  //create user
  const createUser = (email,password)=>{
       setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
  }


  //update user
  const updateUserProfile =(name, photo)=>{
      setLoading(true);
     return updateProfile(auth.currentUser, {
      displayName: name, 
      photoURL: photo
    });
  }

  //sign in
  const loginUser =(email,password)=>{
      setLoading(true);
     return signInWithEmailAndPassword(auth, email, password);
  }

  //google login
  const loginWithGoogle =()=>{
     setLoading(true);
     return signInWithPopup(auth, googleProvider);
  }

  const loginWithFacebook =()=>{
     setLoading(true);
     return signInWithPopup(auth, facebookProvider);
  }


  const logOut=()=>{
     setLoading(true);
     return signOut(auth);
  }


  useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth, (currentUser)=>{
         if(currentUser){
          console.log("this user is observing by onAuthChangeState:", currentUser)
          setUser(currentUser);
          setLoading(false);
          console.log("Current user logged in!")
         }
         else{
           setUser(null);
           console.log("Current user logged out!")
           setLoading(false);
           console.log(user);
         }
      })

      return ()=>{
         unsubscribe();
      }

  },[])


//   AOS animation   //
  useEffect(() => {
   AOS.init({
     duration: 2000,
     once: true,
     
   });
 }, []);

  useEffect(() => {
   if(!loading){
      AOS.refresh();
      console.log("AOS is refreshed!")
   }
 }, [loading]);

 

  const authInfo = {
     user,
     createUser,
     loginUser,
     loginWithGoogle,
     loginWithFacebook,
     logOut,
     updateUserProfile,
     loading,
     setLoading
  };


  return (
    <div>
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
      <ToastContainer/>
    </div>
  );
};

export default FirebaseProvider;

FirebaseProvider.propTypes = {
   children: PropTypes.object
}