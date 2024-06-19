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
import DonationReq from './Components/Pages/DonationReq';
import Dashboard from './Components/Pages/Dashboard';
import Profile from './Components/Dashboard/Profile';
import Payment from './Components/Pages/Payment';
import DonationReqForm from './Components/Dashboard/DonationReqForm';
import MyDonationReq from './Components/Pages/MyDonationReq';
import DashHome from './Components/Dashboard/DashHome';

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
      },
      {
        path: "/donaReq",
        element: <DonationReq></DonationReq>
      },
      {
        path: "/payment",
        element: <Payment></Payment>
      },
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
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "profile",
        element: <Profile></Profile>
      },
      {
        path: "createReq",
        element: <DonationReqForm></DonationReqForm>
      },
      {
        path: "dashboardHome",
        element: <DashHome></DashHome>
      },
      {
        path: "myReq",
        element: <MyDonationReq></MyDonationReq>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
