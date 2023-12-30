import { Outlet, useLocation, useNavigation } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import SpinnerFullPage from "./SpinnerFullPage";
import ScrollToTop from "./ScrollToTop";

function AppLayout() {
  const { pathname } = useLocation();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const hideFooter = pathname.includes("restaurant");

  return (
    <div>
      <ScrollToTop />
      <Header />
      {isLoading && <SpinnerFullPage />}
      {!isLoading && <Outlet />}
      {!hideFooter && <Footer />}
    </div>
  );
}

export default AppLayout;
