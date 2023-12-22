import { useContext } from "react";
import {
  FaEnvelope,
  FaHome,
  FaList,
  FaMastodon,
  FaSearch,
  FaUser,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex">
      <div className="w-64 min-h-screen py-5 bg-blue-400">
        <ul className="menu px-5 py-5">
          {user && (
            <>
              <li>
                <NavLink className="my-2" to="/dashboard/userHome">
                  <FaUser></FaUser> User Home
                </NavLink>
              </li>
              <li>
                <NavLink className="my-2" to="/dashboard/addTask">
                  <FaHome></FaHome> Add Task
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/to-do">
                  <FaMastodon></FaMastodon> All Task
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink className="my-4" to="/">
              <FaHome></FaHome>Home
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
