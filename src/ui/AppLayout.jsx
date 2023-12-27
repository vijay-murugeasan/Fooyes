import { Outlet, useLocation, useNavigation } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import SpinnerFullPage from "./SpinnerFullPage";
import ScrollToTop from "./ScrollToTop";

const containerStyle = {
  "media (min-width: 768px)": {
    display: "grid",
    height: "100vh",
  },
};

function AppLayout() {
  const { pathname } = useLocation();
  const hideFooter = pathname.includes("restaurant");
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

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
