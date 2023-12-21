import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts/MainLayouts";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp.jsx/SignUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Dashboard from "../layouts/Dashboard";
import UserHome from "../pages/DashBoard/UserHome/UserHome";
import AddTask from "../pages/DashBoard/AddTask/AddTask";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },
      {
        path: "addTask",
        element: <AddTask></AddTask>,
      },
    ],
  },
]);
