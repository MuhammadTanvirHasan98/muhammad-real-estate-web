import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";



const Root = () => {
  return (
    <div>
     <div className="w-[85%] mx-auto">
       <Navbar/>
       <Outlet/>
       </div>
       <Footer/>
    </div>
  );
};

export default Root;