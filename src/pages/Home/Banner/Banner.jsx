import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="py-10">
      <div className="bg-blue-500 text-white ">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Task Management App</h1>
          <p className="mt-2">Stay organized and boost your productivity!</p>
          <Link to="/login">
            <button className="btn btn-outline my-4 text-white">
              Let’s Explore
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
