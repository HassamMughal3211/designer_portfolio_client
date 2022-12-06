import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookIllustration from "../BookIllustration/BookIllustration";
import Graphicdesign from "../GraphicDesign/Graphicdesign";
import Home from "../Home/Home";
import Illustration from '../Illustration/Illustration';
import Logo from "../Logo/Logo";

const MainRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
        path: "/illustration",
        element: <Illustration />,
    },
    {
        path: "/graphicdesign",
        element: <Graphicdesign/>,
    },
    {
        path: "/bookillustration",
        element: <BookIllustration />,
    },
    {
        path: "/logo",
        element: <Logo />,
    },
    {
        path: "/gifs",
        element: <Illustration />,
    },
  ]);

  return  <RouterProvider router={router} />;
  
};

export default MainRoutes;
