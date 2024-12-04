import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";

import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";

import Home from "./pages/home/Home.jsx";
import ReturnProduct from "./pages/home/ReturnProduct.jsx";
import StatusProduct from "./pages/home/StatusProduct.jsx";

import Dashbord from "./pages/admin/Dashbord.jsx";
import Stor from "./pages/admin/Stor.jsx";
import Approvestor from "./pages/admin/Approvestor.jsx";
import ProductTracking from "./pages/admin/ProductTracking.jsx";
import ReturnsHistoryProduct from "./pages/admin/ReturnsHistoryProduct.jsx";
import SettingNotifi from "./pages/admin/SettingNotifi.jsx";
import ManageAdmin from "./pages/admin/ManageAdmin.jsx";
import Fromaddproduct from "./pages/admin/Fromaddproduct.jsx";

import AuthUser from "./pages/Auth/AuthUser.jsx";
import AuthAdmins from "./pages/Auth/AuthAdmins.jsx";

import Settingfrom from "./pages/admin/Settingfrom.jsx";

import { ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import CSS for Toast



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/returnproduct",
    element: <ReturnProduct />,
  },
  {
    path: "/statusproduct",
    element: <StatusProduct />,
  },
  {
    path: "/admin/Dashbord",
    element: <Dashbord />,
  },
  {
    path: "/admin/Stors",
    element: <Stor />,
  },
  {
    path: "/admin/Approvestors",
    element: <Approvestor />,
  },
  {
    path: "/admin/Producttracking",
    element: <ProductTracking />,
  },
  {
    path: "/admin/Returnshistoryproduct",
    element: <ReturnsHistoryProduct />,
  },
  {
    path: "/admin/Settingnotifi",
    element: <SettingNotifi />,
  },
  {
    path: "/admin/ManageAdmin",
    element: <ManageAdmin />,
  },
  {
    path: "/admin/Fromaddproduct",
    element: <Fromaddproduct />,
  },
  {
    path: "/admin/settingfrom",
    element: <Settingfrom />,
  },
  {
    path: "/Login",
    element: <AuthUser />,
  },
  {
    path: "/Login/LoginAD",
    element: <AuthAdmins />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition:Bounce
      />
  </React.StrictMode>
);
