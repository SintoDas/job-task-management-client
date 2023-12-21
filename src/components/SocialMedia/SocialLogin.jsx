import { useContext } from "react";
import { FaFacebook, FaGooglePlusG } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const handleSocialMedia = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
    });
  };
  return (
    <div>
      <div className="flex gap-5">
        <button onClick={handleSocialMedia} className="btn btn-sm">
          <FaGooglePlusG className="mr-2"></FaGooglePlusG>
          Google
        </button>
        <button className="btn btn-sm">
          <FaFacebook className="mr-2"></FaFacebook>
          Facebook
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
