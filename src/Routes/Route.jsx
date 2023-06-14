import {
        createBrowserRouter,
      } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import Errorpage from "../Errorpage";
import Login from "../Authentication/Login";
import Signup from "../Authentication/Signup";
import Instructors from "../Home/Pages/Instructors";
import Classes from "../Home/Pages/Classes";
 
 

    export  const router = createBrowserRouter([
        {
          path: "/",
          element: <Main></Main>,
          errorElement:<Errorpage></Errorpage>,
          children: [
                {
                        path:'/',
                        element:<Home></Home>
                },
                {
                        path:'login',
                        element:<Login></Login>
                },
                {
                        path:'signup',
                        element:<Signup></Signup>
                },
                 
                {
                        path:'instructor',
                        element: <Instructors></Instructors>
                },
                {
                        path:'classes',
                        element:<Classes></Classes>
                }
          ]
        },
      ]);