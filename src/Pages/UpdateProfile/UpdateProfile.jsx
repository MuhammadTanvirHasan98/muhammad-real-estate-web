import { UseAuthContext } from "../../FirebaseProvider/FirebaseProvider";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateProfile = () => {
  const { user,setLoading, updateUserProfile } = UseAuthContext();
  const [edit, setEdit] = useState(false);

  const tost =()=> toast.success("Wow so easy !",{position: "top-center"})

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    console.log(form);
    const name = form.get("name");
    var photo = form.get("photo");
    console.log(name, photo);
    // Disable edit mode after update

    //Another way
    // const name = e.target.name.value;
    // const photo = e.target.photo.value;
    // console.log(name,photo)
    // Logic to update user profile
    if(photo==null){
        photo = "https://i.ibb.co/NThmbzT/Userprofile.png";
    }
   
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
    <div className="my-12">
     <Helmet>
         <title>Mahammad Real Esate | Update Profile</title>
      </Helmet>

      <div className="w-full md:w-3/4 lg:w-1/2 mx-auto flex-col">
        <div className="text-center lg:text-left">
          <h1 className="lg:text-4xl text-indigo-500 text-3xl text-center font-bold">
            Update Your Profile!
          </h1>
        </div>

        {/* Profile Info */}
          <div className=" my-4 border-indigo-500 border-2 w-full  bg-base-100 shadow-xl">
            <figure className=" w-1/2 mx-auto  my-4">
              <img
                src={user?.photoURL}
                alt="Shoes"
                className="border-2 border-indigo-600 rounded-full w-[200px] mx-auto p-2 h-[200px] "
              />
            </figure>
            <div className="p-4 items-center text-center play">
              <h2 className="lg:text-2xl text-xl font-semibold text-indigo-600">
                Name: {user?.displayName}
              </h2>
              <p className="lg:text-xl  text-wrap text-indigo-400">Email: {user?.email}</p>
               <p className="text-gray-400 text-wrap ">PhotoURL: {user?.photoURL}</p>
            </div>
          </div>
          {/* Profile Info ends */}
     

        <div className="card shrink-0 w-full shadow-2xl bg-base-100">
          <form onSubmit={handleUpdate} className="card-body ">
            {/* Update Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-indigo-500">Update Name</span>
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
                <span className="label-text text-indigo-500">Update Photo URL</span>
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

            <div className="flex justify-between mt-6">
             

              <button
                type="submit"
                className="btn md:btn-md lg:btn-md btn-sm btn-success text-white font-bold"
                disabled={!edit} // Enable save button only in edit mode
              >
                Save changes
              </button>
            </div>
          </form>
          <div>
          <button
                onClick={handleEdit}
                className="btn btn-sm md:btn-md lg:btn-md btn-primary absolute bottom-8 right-8"
                 // Disable edit button when in edit mode
              >
                Edit
              </button>

          </div>
        
          <button className="btn btn-outline" onClick={tost}>Toast</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UpdateProfile;
