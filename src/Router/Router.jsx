import {
  createBrowserRouter
} from "react-router-dom";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import Root from "../Layouts/Root";
import Register from "../Pages/Register/Register";
import UserProfile from "../Pages/UserProfile/UserProfile";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import ContactUs from "../Pages/ContactUs/ContactUs";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import CardDetails from "../Pages/Home/Sections/Card/CardDetails";


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
          path:"/contact",
          element:<PrivateRoute>
             <ContactUs/>
          </PrivateRoute>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/estate/:id",
          element:<CardDetails/>,
          loader: ()=> fetch("estate.json")

        },
        {
          path:"/register",
          element:<Register/>
        },
        {
          path:"/userProfile",
          element:<PrivateRoute>
                     <UserProfile/>
                  </PrivateRoute>
         
        },
        {
          path:"/updateProfile",
          element:
                   <PrivateRoute>
                     <UpdateProfile/>
                  </PrivateRoute>
        },
      ]
    },
  ]);
 

export default router;