import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
  const { createUser, updateLoggedInUserProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser, data);
      updateLoggedInUserProfile(data.name, data.photoURL)
        .then(() => {
          console.log(result.user);
        })
        .catch((err) => console.log(err));
    });
  };

  return (
    <div className="hero min-h-screen bg-base-200  ">
      <div className="hero-content flex-col lg:flex-row justify-center items-center ">
        <h1 className="text-2xl font-bold">Register now!</h1>

        <div className="card  w-full md:1/2 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                defaultValue="test"
                {...register("name", { required: true })}
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoURl</span>
              </label>
              <input
                type="text"
                placeholder="Photo URl"
                name="photoURL"
                defaultValue="test"
                {...register("photoURL", { required: true })}
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-600">photoURL is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                defaultValue="test"
                {...register("email", { required: true })}
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                defaultValue="test"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern:
                    /^(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{6,}).*$/,
                })}
                placeholder="password"
                className="input input-bordered"
              />

              {errors.password?.type === "required" && (
                <span className="text-red-600">Password is required</span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-red-600">
                  At least provide 6 character
                </span>
              )}
              {errors.password?.type === "maxLength" && (
                <span className="text-red-600">Provide less than 20</span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="text-red-600">
                  At least 6 characters, min 1 Uppercase 1 Lowercase 1 Number 1
                  special character and only contains symbols from the alphabet,
                  num
                </span>
              )}
            </div>
            <div className="form-control mt-6">
              <input className="btn " type="submit" value="Sign Up " />
            </div>
            <p className="text-lg ">
              Already Have an account?
              <small className="text-orange-400  text-lg">
                <Link to="/login">Login</Link>
              </small>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
