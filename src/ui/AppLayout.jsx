import { Outlet, useLocation, useNavigation } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import SpinnerFullPage from "./SpinnerFullPage";
import ScrollToTop from "./ScrollToTop";
import RestaurantsSkelton from "../pages/skelton/restaurants/Restaurants";
import { useEffect, useState } from "react";

function AppLayout() {
  const { pathname } = useLocation();
  const navigation = useNavigation();
  const [restaurantTrue, setRestaurantTrue] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    navigation.state === "loading" ? setIsLoading(true) : setIsLoading(false);

    if (pathname.includes("restaurant")) {
      setRestaurantTrue(true);
    }
  }, [pathname, isLoading, navigation]);
  const Loader = restaurantTrue ? RestaurantsSkelton : SpinnerFullPage;
  return (
    <div>
      <ScrollToTop />
      <Header />
      {isLoading && <Loader />}
      {!isLoading && <Outlet />}
      {!restaurantTrue && <Footer />}
    </div>
  );
}

export default AppLayout;
