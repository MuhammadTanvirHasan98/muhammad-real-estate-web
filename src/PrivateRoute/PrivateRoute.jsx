import { Navigate, useLocation } from "react-router-dom";
import { UseAuthContext } from "../FirebaseProvider/FirebaseProvider";
import PropTypes from "prop-types";


const PrivateRoute = ({children}) => {

 console.log("Private Route Called!")
  const {user} = UseAuthContext();
  const location =  useLocation();
  console.log(location);


   if (user){
     return children;
   }

  return  <Navigate to="/login" state={location.pathname}></Navigate>

};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.object
}