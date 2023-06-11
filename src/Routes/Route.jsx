import {
        createBrowserRouter,
      } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import Errorpage from "../Errorpage";

    export  const router = createBrowserRouter([
        {
          path: "/",
          element: <Main></Main>,
          errorElement:<Errorpage></Errorpage>,
          children: [
                {
                        path:'/',
                        element:<Home></Home>
                }
          ]
        },
      ]);