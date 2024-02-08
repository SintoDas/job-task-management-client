import { useContext } from "react";
import { FaTasks, FaUser, FaHome } from "react-icons/fa";
import { MdAddTask } from "react-icons/md";

import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex">
      <div className=" min-h-screen bg-blue-600 text-white font-bold">
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
                  <MdAddTask></MdAddTask> Add Task
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/to-do">
                  <FaTasks></FaTasks> All Task
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          {user && (
            <li>
              <NavLink className="my-4" to="/">
                <FaHome></FaHome>Home
              </NavLink>
            </li>
          )}
        </ul>
      </div>

      <div className="flex-1 bg-blue-400">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
