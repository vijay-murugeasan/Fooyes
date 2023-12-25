import { useSelector } from "react-redux";
import Banner from "../features/home/Banner";
import Categories from "../features/home/Categories";
import Restaurants from "../features/home/Restaurants";
import StartOrder from "../features/home/StartOrder";
import Location from "./Location";
<link rel="stylesheet" href="../assets/css/home.css" />;

function HomeLayout() {
  const position = useSelector((state) => state.user.position);
  console.log(position);
  return position === "" ? (
    <Location />
  ) : (
    <main>
      <Banner />
      <Categories />
      <Restaurants />
      {/* <DeliveryBanner /> */}
      <StartOrder />
    </main>
  );
}

export default HomeLayout;
