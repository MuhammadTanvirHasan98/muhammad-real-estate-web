import { UseAuthContext } from "../../FirebaseProvider/FirebaseProvider";
import { useState } from "react";

const UpdateProfile = () => {
  const { user, updateUserProfile } = UseAuthContext();
  const [edit, setEdit] = useState(false);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    console.log(form);
    const name = form.get("name");
    const photo = form.get("photo");
    console.log(name, photo);
    setEdit(false); // Disable edit mode after update

    //Another way
    // const name = e.target.name.value;
    // const photo = e.target.photo.value;
    // console.log(name,photo)

    // Logic to update user profile
    updateUserProfile(name, photo).then(() => {
      console.log("User Updated Successfully!");
    });
  };

  const handleEdit = () => {
    setEdit(true); // Enable edit mode
  };

  return (
    <div className="my-12">
      <div className="w-full md:w-3/4 lg:w-1/2 mx-auto flex-col">
        <div className="text-center lg:text-left">
          <h1 className="lg:text-4xl text-3xl text-center font-bold">
            Update Your Profile!
          </h1>
        </div>

        {/* Profile Info */}
          <div className="card my-4 border-lime-500 border-2 w-full  bg-base-100 shadow-xl">
            <figure className=" w-1/2 mx-auto  my-4">
              <img
                src={user?.photoURL}
                alt="Shoes"
                className="border-2 border-lime-700 rounded-full w-[200px] p-2 h-[200px] "
              />
            </figure>
            <div className="p-4 items-center text-center">
              <h2 className="lg:text-3xl text-2xl font-semibold">
                Name: {user.displayName}
              </h2>
              <p className="lg:text-2xl text-xl font-semibold">Email: {user.email}</p>
              <div className="card-actions flex flex-col items-center"></div>
            </div>
          </div>
          {/* Profile Info ends */}
     

        <div className="card shrink-0 w-full shadow-2xl bg-base-100">
          <form onSubmit={handleUpdate} className="card-body">
            {/* Update Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Update Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-info"
                disabled={!edit}
                required
              />
            </div>

            {/* Update Photo URL */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Update Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter photo URL"
                className="input input-info"
                disabled={!edit}
              />
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={handleEdit}
                className="btn btn-sm md:btn-md lg:btn-md btn-primary"
                disabled={edit} // Disable edit button when in edit mode
              >
                Edit
              </button>

              <button
                type="submit"
                className="btn md:btn-md lg:btn-md btn-sm btn-success text-white font-bold"
                disabled={!edit} // Enable save button only in edit mode
              >
                Save changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
