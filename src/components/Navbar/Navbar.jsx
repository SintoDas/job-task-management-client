import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import logoImg from "../../assets/IMG_20240208_025955.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut();
  };

  const navLinks = (
    <>
      <div className="flex gap-6 justify-center items-center">
        <li>
          <button className="btn btn-ghost btn-md text-lg">
            <NavLink to="/">Home</NavLink>
          </button>
        </li>

        {user ? (
          <>
            <button
              onClick={handleLogOut}
              className="btn btn-ghost btn-md text-lg"
            >
              LogOut
            </button>
          </>
        ) : (
          <>
            <li>
              <button className="btn btn-ghost btn-md text-lg">
                <NavLink to="/signUp">Register</NavLink>
              </button>
            </li>
            <li>
              <button className="btn btn-ghost btn-md text-lg">
                <NavLink to="/login">Login</NavLink>
              </button>
            </li>
          </>
        )}
      </div>
    </>
  );
  return (
    <div className="navbar bg-blue-400 text-white font-bold">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex items-center  text-white">
          <h2>Task Management</h2>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
    </div>
  );
};

export default Navbar;
