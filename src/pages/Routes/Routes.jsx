import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Home/Home";
import Illustration from '../Illustration/Illustration';

const MainRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
        path: "/illustrations",
        element: <Illustration />,
    },
  ]);

  return  <RouterProvider router={router} />;
  
};

export default MainRoutes;
