import { Outlet, useLocation, useNavigation } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import SpinnerFullPage from "./SpinnerFullPage";

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
      <Header />
      {isLoading && <SpinnerFullPage />}
      {!isLoading && <Outlet />}
      {!hideFooter && <Footer />}
    </div>
  );
}

export default AppLayout;
