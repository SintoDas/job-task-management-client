import { useContext } from "react";
import { FaEnvelope, FaHome, FaSearch, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex">
      <div className="w-64 min-h-screen py-5 bg-orange-400">
        <ul className="menu px-5 py-5">
          {user && (
            <>
              <li>
                <NavLink className="my-2" to="/dashboard/userHome">
                  <FaHome></FaHome> User Home
                </NavLink>
              </li>
              <li>
                <NavLink className="my-2" to="/dashboard/addTask">
                  <FaHome></FaHome> Add Task
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers">
                  <FaUsers></FaUsers> ALL Users
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
          <li>
            <NavLink className="my-4" to="/order/salad">
              <FaSearch></FaSearch> Menu
            </NavLink>
          </li>
          <li>
            <NavLink className="my-4" to="/order/Contact">
              <FaEnvelope></FaEnvelope> Contact
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
