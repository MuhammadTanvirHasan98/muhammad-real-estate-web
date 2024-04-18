import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { UseAuthContext } from "../../FirebaseProvider/FirebaseProvider";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { toast } from 'react-toastify';
import { Helmet } from "react-helmet-async";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";


const Login = () => {
 
  const { user, loginUser, loginWithGoogle, loginWithFacebook } = UseAuthContext();
  const[showPass, setShowPass] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const goToThere = location?.state || "/" ;

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    //sign in with email and password
    loginUser(email, password)
      .then(() => {
        toast.success("Logged in successfully!");
        navigate(goToThere);
      })
      .catch((error) => {
        toast.warn(error.message.slice(9,50));
      });
  };


//User login with social media 
  const handleLoginWithSocial = (LoginWithSocial) => {
    LoginWithSocial()
      .then(() => {
        if(LoginWithSocial == loginWithGoogle){
          toast.success("Logged in with gmail successfully!");
        }
        else if(LoginWithSocial == loginWithFacebook){
          toast.success("Logged in with facebook successfully!");
        }
        navigate(goToThere);
      })
  };


  return (
    <div className={`${user ? "hidden":"block"} mt-10`}>
      <Helmet>
         <title>Mahammad Real Esate | Login</title>
      </Helmet>
      <div className="hero-content mx-auto flex-col">
        <div className="text-center lg:text-left">
          <h1 className="md:text-5xl text-4xl font-bold text-indigo-600">Welcome back!</h1>
        </div>

        {/* Login section */}
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-2 border-indigo-500 ">
          {/* Login Form start from here */}
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-indigo-500 font-semibold">Email</span>
              </label>
              {/* Email input */}
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-info text-sky-500"
                required
              />
            </div>


            <div className="form-control mt-1">
              <label className="label">
                <span className="label-text text-indigo-500 font-semibold">Password</span>
              </label>
              {/* Password input */}
              <input
                type={showPass ? "text":"password"}
                name="password"
                placeholder="password"
                className="input input-info text-sky-500"
                required
              />
              <span onClick={()=>setShowPass(!showPass)}
              className="absolute text-sky-500 text-2xl right-12 top-44">
               {showPass? <IoEyeOffOutline/>:<IoEyeOutline/>} 
              </span>
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
              <button type="submit" className="btn btn-primary text-xl  text-white">
                Login
              </button>
            </div>
          </form>
          {/* Login Form ends here */}

          <p className="text-center text-blue-600 mb-4">
            You new here? Then <Link className="btn-link" to="/register"> Register</Link> first.
          </p>
          <div className="flex flex-col gap-3 mb-6">
            <button
              onClick={()=>handleLoginWithSocial(loginWithGoogle)}
              type="submit"
              className="btn text-orange-500 btn-sm border-orange-500 w-[82%] mx-auto"
            >
              <FcGoogle />
              Login with Google
            </button>

            <button
              onClick={()=>handleLoginWithSocial(loginWithFacebook)}
              type="submit"
              className="btn btn-sm  w-[82%] border-blue-600 text-blue-500 mx-auto"
            >
              <SiFacebook />Login with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
