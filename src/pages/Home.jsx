import { useSelector } from "react-redux";
import Banner from "../features/home/Banner";
import Categories from "../features/home/Categories";
import Restaurants from "../features/home/Restaurants";
import StartOrder from "../features/home/StartOrder";
import Location from "./Location";
import "../assets/css/home.css";

function HomeLayout() {
  const position = useSelector((state) => state.user.position);

  return position === "" ? (
    <Location />
  ) : (
    <main>
      <Banner />
      {window.screen.width >= 990 && <Categories />}
      <Restaurants />
      {/* <DeliveryBanner /> */}
      <StartOrder />
    </main>
  );
}

export default HomeLayout;
