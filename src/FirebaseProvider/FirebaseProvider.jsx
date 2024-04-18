import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, GoogleAuthProvider,  FacebookAuthProvider } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
import AOS from 'aos';
import 'aos/dist/aos.css';


const AuthContext = createContext({});

// Custom hook
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
  const createUser = (email,password) =>{
       setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
  }


  // update user //
  const updateUserProfile = (name, photo) =>{
      setLoading(true);
     return updateProfile(auth.currentUser, {
      displayName: name, 
      photoURL: photo
    });
  }

  // user login in //
  const loginUser = (email,password) =>{
      setLoading(true);
     return signInWithEmailAndPassword(auth, email, password);
  }

  //user google login //
  const loginWithGoogle = () =>{
     setLoading(true);
     return signInWithPopup(auth, googleProvider);
  }

  //user facebook login //
  const loginWithFacebook = () =>{
     setLoading(true);
     return signInWithPopup(auth, facebookProvider);
  }

  // user log out //
  const logOut = () =>{
     setLoading(true);
     return signOut(auth);
  }

   // Observing user by onAuthStateChanged
  useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth, (currentUser)=>{
         if(currentUser){
          setUser(currentUser);
          setLoading(false);
          console.log("Current user logged in!")
         }
         else{
           setUser(null);
           setLoading(false);
           console.log("Current user logged out!")
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
    </div>
  );
};

export default FirebaseProvider;

FirebaseProvider.propTypes = {
   children: PropTypes.object
}