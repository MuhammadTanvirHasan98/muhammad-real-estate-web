import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

const AuthContext = createContext(null);

export const UseAuthContext =()=>{
    const authContext = useContext(AuthContext);
    return authContext; 
}

const FirebaseProvider = ({children}) => {

  const[user, setUser] = useState([]);

  const googleProvider = new GoogleAuthProvider();


  //create user
  const createUser = (email,password)=>{
      return createUserWithEmailAndPassword(auth, email, password);
  }


  //update user
  const updateUserProfile =(name, photo)=>{
     return updateProfile(auth.currentUser, {
      displayName: name, 
      photoURL: photo
    });
  }

  //sign in user
  const loginUser =(email,password)=>{
     return signInWithEmailAndPassword(auth, email, password);
  }

  //google login
  const loginWithGoogle =()=>{
     return signInWithPopup(auth, googleProvider);
  }


  const logOut=()=>{
     return signOut(auth);
  }


  useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth, (currentUser)=>{
         if(currentUser){
          console.log("this user is observing by onAuthChangeState:", currentUser)
          setUser(currentUser);
          console.log("Current user logged in!")
         }
         else{
           setUser(null);
           console.log("Current user logged out!")
         }
      })

      return ()=>{
         unsubscribe();
      }

  },[])

 

  const authInfo = {
     user,
     createUser,
     loginUser,
     loginWithGoogle,
     logOut,
     updateUserProfile
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