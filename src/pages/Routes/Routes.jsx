import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from '../Home/Home'

const MainRoutes = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
    ]);

    return (
        <RouterProvider router={router} />
    )
}

export default MainRoutes