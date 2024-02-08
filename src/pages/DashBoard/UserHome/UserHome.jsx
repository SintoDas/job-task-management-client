import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const UserHome = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="px-4 md:px-10 py-4 md:py-10 flex flex-col md:flex-row justify-between items-center">
      <h2 className="text-xl text-white mb-2 md:mb-0">
        Hi, welcome
        <span className="text-white font-bold text-lg md:p-2">
          {user?.displayName ? user.displayName : "Back"}
        </span>
      </h2>
      <div className="avatar mt-4 md:mt-0 md:ml-4">
        <div className="w-6 h-6 md:w-12 md:h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={user?.photoURL}
            alt={user?.displayName}
          />
        </div>
      </div>
    </div>
  );
};

export default UserHome;
