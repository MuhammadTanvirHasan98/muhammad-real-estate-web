import { createContext, useContext } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext(null);

export const UseAuthContext =()=>{
    const authContext = useContext(AuthContext);
    return authContext; 
}

const FirebaseProvider = ({children}) => {

 

  const authInfo = {name:"Muhammad"};


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