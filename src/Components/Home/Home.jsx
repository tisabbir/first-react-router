import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
  const navigate = useNavigation();
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <Header></Header>
      <div>
        <h2>This is the home Land of our website</h2>
      </div>
      {navigate === "loading" ? "Loading...." : <Outlet></Outlet>}
    </div>
  );
};

export default Home;
