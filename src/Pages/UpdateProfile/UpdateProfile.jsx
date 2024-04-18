import { UseAuthContext } from "../../FirebaseProvider/FirebaseProvider";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { toast } from 'react-toastify';

const UpdateProfile = () => {
  const { user,setLoading, updateUserProfile } = UseAuthContext();
  const [edit, setEdit] = useState(false);

  // const tost =()=> toast.success("Wow so easy !",{position: "top-center"})

 

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
  
    updateUserProfile(name, photo).then(() => {
      console.log("User Updated Successfully!");
      toast.success("Updated Profile Successfully!",{position: "top-center"})
      setLoading(false);
    });
    
  };

  const handleEdit = () => {
    setEdit(!edit); // Enable edit mode
  };

  return (
    <div className="my-12" >
     <Helmet>
         <title>Mahammad Real Esate | Update Profile</title>
      </Helmet>

      <div  className="w-full md:w-3/4 lg:w-1/2 mx-auto flex-col">
        <div className="text-center lg:text-left">
          <h1 data-aos="flip-left" className="lg:text-4xl text-indigo-500 text-3xl text-center font-bold">
            Update Your Profile!
          </h1>
        </div>

        {/* Profile Info */}
          <div data-aos="fade-right" className=" my-4 border-indigo-500 border-2 w-full  bg-base-100 shadow-xl">
            <figure className=" w-1/2 mx-auto  my-4">
              <img
                src={user?.photoURL!==null ?  user?.photoURL :"https://i.ibb.co/NThmbzT/Userprofile.png" }
                alt="Shoes"
                className="border-2 border-indigo-600 rounded-full w-[180px] h-[180px] md:w-[200px] md:h-[200px] mx-auto p-2"
              />
            </figure>
            <div className="p-4 items-center text-center play">
              <h2 className="lg:text-2xl text-xl font-semibold text-indigo-600">
                Name: {user?.displayName}
              </h2>
              <p className="lg:text-xl  text-wrap text-indigo-500">Email: {user?.email}</p>
               <p className="text-indigo-400 text-wrap "> <span className="font-semibold">PhotoURL:</span>  {user?.photoURL}</p>
            </div>
          </div>
          {/* Profile Info ends */}
     

       {/* Update Field */}
        <div data-aos="fade-left" className="card shrink-0 w-full shadow-2xl bg-base-100 rounded-none">
          <form onSubmit={handleUpdate} className="card-body ">
            {/* Update Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-lg text-indigo-500">Update Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-info text-indigo-500"
                disabled={!edit}
                // value={user.displayName}
                required
              />
            </div>

            {/* Update Photo URL */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-lg text-indigo-500">Update Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter photo URL"
                className="input input-info text-indigo-500"
                disabled={!edit}
                // value={user.photoURL}
              />
            </div>

            {/* User Email will be updated */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-lg text-indigo-500">Your Email</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter photo URL"
                className="input input-info text-indigo-500"
                disabled={true}
                value={user?.email}
              />
              <p className="text-xs lg:text-sm text-indigo-300 ml-1">Note: You can not update your email.</p>
            </div>

            <div className="flex justify-between mt-6">
              <button
                type="submit"
                className="btn md:btn-md lg:btn-md btn-sm btn-success text-white font-bold"
                disabled={!edit} 
              >
                Save changes
              </button>
            </div>
          </form>
          <div>
          <button
                onClick={handleEdit}
                className="btn btn-sm md:btn-md lg:btn-md btn-primary absolute bottom-8 right-8"
              >
                Edit
              </button>

          </div>
        
          {/* <button className="btn btn-outline" onClick={tost}>Toast</button> */}
        </div>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default UpdateProfile;
