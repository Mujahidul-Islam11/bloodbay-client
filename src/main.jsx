import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LayOut from './LayOut/LayOut';
import Home from './Components/Pages/Home';
import Search from './Components/Pages/Search';
import Blogs from './Components/Pages/Blogs';
import Register from './Components/Pages/Register';
import Login from './Components/Pages/Login';
import AuthProvider from './AuthProvider';
import BlogDetails from './Components/Pages/BlogDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/search",
        element: <Search></Search>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      }
    ]
  },

  {
    path: "/signUp",
    element: <Register></Register>
  },
  {
    path: "/logIn",
    element: <Login></Login>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
