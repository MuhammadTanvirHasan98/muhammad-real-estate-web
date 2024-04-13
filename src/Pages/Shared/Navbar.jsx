import { Link, NavLink } from "react-router-dom";
import { HiHomeModern } from "react-icons/hi2";

const Navbar = () => {
  const navLinks = (
    <div className="flex flex-col lg:flex-row gap-2 ">
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "btn font-bold border-2 border-orange-600 text-orange-600"
              : "font-bold btn"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "btn font-bold border-2 border-orange-600 text-orange-600"
              : "font-bold btn"
          }
          to="/listedBooks"
        >
          Listed Books
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "btn font-bold border-2 border-orange-600 text-orange-600"
              : "font-bold btn"
          }
          to="/pagesToRead"
        >
          Pages to Read
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "btn font-bold border-2 border-orange-600 text-orange-600"
              : "font-bold btn"
          }
          to="/reviews"
        >
          Reviews
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "btn font-bold border-2 border-orange-600 text-orange-600"
              : "font-bold btn"
          }
          to="/upcomingBooks"
        >
          Upcoming
        </NavLink>
      </li>
    </div>
  );

  return (
    <div className="">
      <div className="navbar p-0 mt-2 lg:mt-4 border-2 border-blue-400 bg-gradient-to-r from-blue-400 to-white flex justify-between">
        <div className="navbar-start ">
          {/* Navbar left section */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn px-0 mr-2 btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-orange-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-2"
            >
              {/* Navbar when md screen */}
              {navLinks}

              <li>
                {" "}
                <a className="btn bg-sky-400 font-bold text-white">Sign In</a>
              </li>
              <li>
                {" "}
                <a className="btn bg-green-400 font-bold text-white">Sign Up</a>
              </li>
            </ul>
          </div>
          <Link to="/">
            <div className="flex items-center">
              <HiHomeModern className="text-5xl text-orange-500 lg:text-7xl" />
              <div className=" bg-gradient-to-r from-sky-300 to-purple-200 px-1  border-blue-500">
                <h1 className="text-blue-800  lg:text-2xl text-sm font-bold">
                  Muhammad <br />
                  <span className="lg:text-xl text-orange-600 flex justify-center text-[12px]  tracking-wide">
                    Real Estate
                  </span>
                </h1>
              </div>
            </div>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className=" flex gap-2">{navLinks}</ul>
        </div>

  
       {/* Profile image */}
       
       <img
            className="w-[35px] mr-2 lg:hidden h-[35px] border-2 border-blue-700 p-[1px] rounded-full"
            src="https://i.ibb.co/ZNn9nhy/quran-and-modern-science.png"
            alt=""
          />
         
      {/* Login button */}
        <div className="navbar-end hidden lg:flex gap-2">
          <button className="btn mr-2 bg-sky-400 font-bold text-white">Login</button>
        </div>


        
      
      </div>
    </div>
  );
};

export default Navbar;
