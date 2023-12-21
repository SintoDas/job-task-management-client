import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const UserHome = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="px-10 py-10 ">
        <h2 className="text-2xl">
          Hi, welcome
          <span className="text-orange-600 text-lg p-2">
            {user?.displayName ? user.displayName : "Back"}
          </span>
        </h2>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default UserHome;
