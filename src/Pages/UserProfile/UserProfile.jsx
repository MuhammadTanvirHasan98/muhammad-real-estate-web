import { Link } from "react-router-dom";
import { UseAuthContext } from "../../FirebaseProvider/FirebaseProvider";
import { Helmet } from "react-helmet-async";

const UserProfile = () => {


  const { user } = UseAuthContext();

  return (
    <div className="flex flex-col justify-center items-center p-4 md:p-8 lg:p-10 border-blue-300 bg-gradient-to-r from-blue-200 border-2 my-12">
      <Helmet>
         <title>Mahammad Real Esate | User Profile</title>
      </Helmet>
      <h1 data-aos="zoom-in-down" data-aos-easing="ease-in-out" className="text-3xl mb-4 font-bold text-indigo-500">Your profile!</h1>

      <div data-aos="flip-right" data-aos-duration="1000" className=" border-indigo-600 border-2 w-[90%] lg:w-[50%] bg-base-100 shadow-xl">
        <figure data-aos="zoom-in" data-aos-easing="ease-in-out" className=" w-1/2 mx-auto   my-4">
          <img
            src={user?.photoURL}
            alt="Shoes"
            className="border-2 border-indigo-600 rounded-full w-[200px] p-2 h-[200px] mx-auto"
          />
        </figure>
        <div data-aos="zoom-in-up" data-aos-easing="ease-in-out" className="p-4 items-center text-center ">
          <div className="play">
          <h2 className="lg:text-2xl font-semibold text-indigo-600">Name: {user?.displayName}</h2>
          <p className="text-indigo-400">Email: {user?.email}</p>
          </div>
         

          <div className="card-actions mt-6 flex flex-col items-center">
            <p className="text-blue-500">Want to update your profile?</p>
            <Link to="/updateProfile">
            <button className="btn btn-sm btn-info text-white font-bold rounded-none">Update Profile</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
