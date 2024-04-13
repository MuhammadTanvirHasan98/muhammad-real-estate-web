import {
  createBrowserRouter
} from "react-router-dom";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import Root from "../Layouts/Root";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/login",
          element:<Login/>
        }
      ]
    },
  ]);
 

export default router;