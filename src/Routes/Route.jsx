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
import Dashboard from "../Layout/Dashboard";
import Myclass from "../Home/Pages/Dashboard/MyClass/Myclass";
import Homepage from "../Home/Pages/Dashboard/Homepage";
import EnrolledClass from "../Home/Pages/Dashboard/EnrolledClass";
import Paymenthistory from "../Home/Pages/Dashboard/Paymenthistory";
 
 

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
        {
                path:'dashboard',
                element:<Dashboard></Dashboard>,
                children: [
                        {
                                path:'home',
                                element:<Homepage></Homepage>
                        },
                        {
                                path:'myclass',
                                element:<Myclass></Myclass>
                        },
                        {
                                path:'enrollclass',
                                element:<EnrolledClass></EnrolledClass>
                        },
                        {
                                path:'history',
                                element:<Paymenthistory></Paymenthistory>
                        }
                ]
        }
      ]);