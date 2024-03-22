import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
  const navigate = useNavigation();
  return (
    <div>
      <Header></Header>
      {navigate === "loading" ? "Loading...." : <Outlet></Outlet>}
    </div>
  );
};

export default Home;
