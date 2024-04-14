import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { UseAuthContext } from "../../FirebaseProvider/FirebaseProvider";

const Register = () => {
  const { user,createUser , updateUserProfile} = UseAuthContext();
  console.log("Register component!");
  // const authInfo = UseAuthContext();
  // console.log(authInfo);
  const navigate = useNavigate();

  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log(name, email, photo, password, accepted);

    setSuccess("");
    setErrorMsg("");
  
    const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=.*[^\w\d\s]).{6,16}$/;

    //password validation
    if(password.length < 6){
       setErrorMsg("Password should be at least 6 characters.")
      return;
    }
    if(!(regex.test(password))){
      setErrorMsg("Password must contain at least one lowercase, one uppercase, one special character from [@#$%^&+=!] and 6 to 16 characters.")
      return;
    }
    if(!accepted){
      setErrorMsg("Please accept our terms and condition.")
      return;
    }

    createUser(email, password)
      .then((result) => {
       updateUserProfile(name, photo)
        .then(() => {
          // Profile updated!
          console.log("User Profile updated!");

          const user = result.user;
          console.log(user);
          setSuccess("User created successfully.");
          e.target.reset();
          navigate("/");
          // ...
        })
  
      })
      .catch((error) => {
        console.error(error.message);
        setErrorMsg((error.message).slice(9,50) );
        // ..
      });
  };

  return (
    <div  className={user ? "hidden":"block"}>
     
          <div className="hero-content mx-auto flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Create New Account!</h1>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              {/* Register Form start from here */}
              <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  {/* Name input */}
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="input input-info"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  {/* PhotoURL input */}
                  <input
                    type="text"
                    name="photo"
                    placeholder="Enter photo URL"
                    className="input input-info"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  {/* Email input */}
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="input input-info"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  {/* Password input */}
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    className="input input-info"
                    required
                  />
                  <label className="flex gap-2 mt-2 ">
                    <input type="checkbox" name="terms" id="" />
                    <a href="#" className="label-text-alt link link-hover">
                      Accept our terms & conditions!
                    </a>
                  </label>
                </div>

                {success && <p className="text-green-500">{success}</p>}
                {errorMsg && <p className="text-red-500">{errorMsg}</p>}

                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
              {/* Register Form ends here */}
              <p className="text-center text-blue-600  mb-4">
                Already have an account? Please
                <Link className="btn-link" to="/login"> Login
                </Link>
              </p>
            </div>
          </div>
    </div>
  );
};

export default Register;
