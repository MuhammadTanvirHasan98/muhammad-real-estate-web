import { Navigate, useLocation } from "react-router-dom";
import { UseAuthContext } from "../FirebaseProvider/FirebaseProvider";
import PropTypes from "prop-types";
import { BallTriangle} from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
  console.log("Private Route Called!");
  const { user, loading } = UseAuthContext();
  const location = useLocation();
  console.log(location);
  console.log(loading);
  if (loading) {
    return (
      <div className="min-h-[60vh] flex justify-center items-center">
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="blue"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={location?.pathname}></Navigate>;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.object,
};
