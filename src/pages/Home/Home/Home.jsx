import { useContext } from "react";
import Dashboard from "../../../layouts/Dashboard";
import { AuthContext } from "../../../providers/AuthProvider";
import Banner from "../Banner/Banner";

const Home = () => {
  const { user, loading } = useContext(AuthContext);
  if (loading) return <h2> Loading...</h2>;

  return (
    <div>
      {!user && <Banner></Banner>}
      {user && <Dashboard></Dashboard>}
    </div>
  );
};

export default Home;
