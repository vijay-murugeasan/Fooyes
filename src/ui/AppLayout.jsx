import { Outlet, useLocation, useNavigation } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import { useEffect, useState } from "react";

function AppLayout() {
  const { pathname } = useLocation();
  const [restaurantTrue, setRestaurantTrue] = useState(false);
  useEffect(() => {
    if (pathname.includes("restaurant")) {
      setRestaurantTrue(true);
    }
  }, [pathname]);
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Outlet />
      {!restaurantTrue && <Footer />}
    </div>
  );
}

export default AppLayout;
