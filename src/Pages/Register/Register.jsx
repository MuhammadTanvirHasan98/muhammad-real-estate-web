import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { UseAuthContext } from "../../FirebaseProvider/FirebaseProvider";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

const Register = () => {
  const { user, createUser, updateUserProfile } = UseAuthContext();
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
   
    //Regex for password validation
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=.*[^\w\d\s]).{6,16}$/;

    //check password length
    if (password.length < 6) {
      toast.warn("Password should be at least 6 characters.");
      return;
    }
    if (!regex.test(password)) {
      toast.warn(" Password must contain at least one lowercase, one uppercase, one special character from [@#$%^&+=!] and 6 to 16 characters.")
      return;
    }
    if (!accepted) {
      toast.warn("Please accept our terms and condition.");
      return;
    }

    createUser(email, password)
      .then(() => {
        toast.success("User created successfully!");
        updateUserProfile(name, photo).then(() => {
            navigate("/");
        });
      })
      .catch((error) => {
        toast.warn(error.message.slice(9, 50));
      });
  };

  return (
    <div className={`${user ? "hidden" : "block"} mt-10`}>

      <Helmet>
         <title>Mahammad Real Esate | Register</title>
      </Helmet>

      <div className="hero-content mx-auto flex-col">
        <div className="text-center lg:text-left">
          <h1 className="md:text-5xl text-4xl font-bold text-indigo-600">Create Account!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-2 border-indigo-500">
          {/* Register Form start from here */}
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-indigo-500 font-semibold">Name</span>
              </label>
              {/* Name input */}
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-info text-sky-500"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-indigo-500 font-semibold">Photo URL</span>
              </label>
              {/* PhotoURL input */}
              <input
                type="text"
                name="photo"
                placeholder="Enter photo URL"
                className="input input-info text-sky-500"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-indigo-500 font-semibold">Email</span>
              </label>
              {/* Email input */}
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-info text-sky-500"
                required
              />
            </div>

            <div className="form-control relative">
              <label className="label">
                <span className="label-text text-indigo-500 font-semibold">Password</span>
              </label>
              {/* Password input */}
              <input
                type={showPass ? "text": "password"}
                name="password"
                placeholder="Enter password"
                className="input input-info text-sky-500"
                required
              />
              <span
                onClick={() => setShowPass(!showPass)}
                className="absolute bottom-9 text-sky-500 right-2 text-2xl"
              >
                {showPass ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </span>
              <label className="flex gap-2 mt-2 ">
                <input type="checkbox" name="terms" id="" />
                <a href="#" className="label-text-alt link link-hover text-blue-500">
                  Accept our terms & conditions!
                </a>
              </label>
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary text-xl text-white">
                Register
              </button>
            </div>
          </form>
          {/* Register Form ends here */}
          <p className="text-center text-blue-600  mb-4">
            Already have account? Please <Link className="btn-link" to="/login">Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
