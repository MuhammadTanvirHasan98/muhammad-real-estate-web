import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";



const Root = () => {
  return (
    <div className="w-[85%] mx-auto">
       <Navbar/>
       <Outlet/>
    </div>
  );
};

export default Root;