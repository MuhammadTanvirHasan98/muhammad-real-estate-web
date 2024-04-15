import { Navigate, useLocation } from "react-router-dom";
import { UseAuthContext } from "../FirebaseProvider/FirebaseProvider";
import PropTypes from "prop-types";
import { Puff } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
  console.log("Private Route Called!");
  const { user, loading } = UseAuthContext();
  const location = useLocation();
  console.log(location);
  console.log(loading);
  if (loading) {
    return <div className="min-h-[60vh] flex justify-center items-center">
        <Puff
          visible={true}
          height="80"
          width="80"
          color="orange"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={location.pathname}></Navigate>;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.object,
};
