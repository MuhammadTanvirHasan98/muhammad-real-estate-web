import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';




const Root = () => {
  return (
    <div>
     <div className="w-[85%] mx-auto">
       <Navbar/>
       <Outlet/>
       </div>
       <Footer/>
       <ToastContainer />
    </div>
  );
};

export default Root;