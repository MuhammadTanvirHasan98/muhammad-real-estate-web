import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { UseAuthContext } from "../../FirebaseProvider/FirebaseProvider";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";


const Login = () => {
  // const {name, age} = UseAuthContext();
  // const authInfo = UseAuthContext();
  // console.log(authInfo);
  // console.log("Login Component!");

  const {user, loginUser, loginWithGoogle, loginWithFacebook } = UseAuthContext();
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState("");
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log("Login is triggered!")
    console.log(email, password);

    //reset error and success messages
    setSuccess("");
    setErrorMsg("");

    //sign in with email and password
    loginUser(email, password)
      .then(() => {
        // Logged in
        // const user = result.user;
        // console.log(user);
        setSuccess("User logged in successfully.");
        console.log("Logged in successfully!");
        toast.success(success);
        e.target.reset();
      })
      .catch((error) => {
        console.error(error.message);
        setErrorMsg(error.message);
        toast.warn(error.message);
      });
  };

  //Sign in with google
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log("This user is from google", user);
        setSuccess("User logged in successfully.");
        toast.success(success);
        // navigate("/profile");
      })
      .catch((error) => {
        console.error(error.message);
        setErrorMsg(error.message);
        // toast.warn(errorMsg);
      });
  };

  //Sign in with Git-hub
  const handleFacebookLogin = () => {
    loginWithFacebook()
      .then((result) => {
        const user = result.user;
        console.log("This user is from Facebook", user);
        toast.success("Logged in with facebook successfully!");
      })
      .catch((error) => {
        console.error(error.message);
        // toast("Wow so easy!")
        setErrorMsg(error.message);
      });
  };

  useEffect(()=>{
     if(user){
       navigate(location?.state || "/");
     }
  },[user])

  return (
    <div className={user ? "hidden":"block"}>
      <Helmet>
         <title>Mahammad Real Esate | Login</title>
      </Helmet>
      <div className="hero-content mx-auto flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Welcome back!</h1>
        </div>

        {/* Login section */}
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          {/* Login Form start from here */}
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              {/* Email input */}
              <input
                type="email"
                name="email"
                placeholder="email"
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
                placeholder="password"
                className="input input-info"
                required
              />
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-blue-600"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>

            {success && <p className="text-green-500">{success}</p>}
            {errorMsg && <p className="text-red-500">{errorMsg}</p>}
          </form>
          {/* Login Form ends here */}
          <p className="text-center text-blue-600 mb-4">
            Are you new here? Then{" "}
            <Link className="btn-link" to="/register">
              Register
            </Link>{" "}
            first.{" "}
          </p>
          <div className="flex flex-col gap-3 mb-6">
            <button
              onClick={handleGoogleLogin}
              type="submit"
              className="btn text-orange-500 btn-sm border-orange-500 w-3/5 mx-auto"
            >
              <FcGoogle />
              Login with Google
            </button>

            <button
              onClick={handleFacebookLogin}
              type="submit"
              className="btn btn-sm  w-3/5 border-blue-600 text-blue-500 mx-auto"
            >
              <SiFacebook />Login with Facebook
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
