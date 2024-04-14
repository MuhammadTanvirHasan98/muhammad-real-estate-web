import { Link } from "react-router-dom";
import { UseAuthContext } from "../../FirebaseProvider/FirebaseProvider";

const UserProfile = () => {


  const { user } = UseAuthContext();

  return (
    <div className="flex flex-col justify-center items-center p-4 md:p-8 lg:p-10 border-blue-300 bg-gradient-to-r from-blue-200 border-2 my-12">
      <h1 className="text-3xl mb-4 font-bold">Your profile!</h1>
      <div className="card border-lime-500 border-2 w-[90%] lg:w-[40%] bg-base-100 shadow-xl">
        <figure className=" w-1/2 mx-auto   my-4">
          <img
            src={user?.photoURL}
            alt="Shoes"
            className="border-2 border-lime-700 rounded-full w-[200px] p-2 h-[200px] "
          />
        </figure>
        <div className="p-4 items-center text-center">
          <h2 className="lg:text-2xl font-semibold">Name: {user.displayName}</h2>
          <p>Email: {user.email}</p>

          <div className="card-actions mt-6 flex flex-col items-center">
            <p className="text-blue-500">Want to update your profile?</p>
            <Link to="/updateProfile">
            <button className="btn btn-sm btn-info text-white font-bold">Update Profile</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
