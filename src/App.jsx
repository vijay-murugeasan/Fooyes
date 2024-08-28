import { Suspense, lazy } from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { useSelector } from "react-redux";

// import Home from "./pages/Home";
// import Contact from "./pages/Contact";
// import PageNotFound from "./pages/PageNotFound";
// import Restaurant from "./pages/Restaurant";

import { loader as restaurantLoader } from "./pages/Restaurants";
import { action as getLocation } from "./pages/Location";
import AppLayout from "./ui/AppLayout";
// import Spinner from "./ui/Spinner";
import Error from "./ui/Error";
import Order from "./features/order/Order";
import SpinnerFullPage from "./ui/SpinnerFullPage";
import ThankYou from "./features/order/ThankYou";
import EmptyCart from "./features/order/EmptyCart";
import HomeSkimmer from "./pages/skelton/home/HomeSkimmer";
import LocationSkimmer from "./pages/skelton/location/LocationSkimmer";

const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Location = lazy(() => import("./pages/Location"));
const Restaurant = lazy(() => import("./pages/Restaurant"));
const Restaurants = lazy(() => import("./pages/Restaurants"));
const RestaurantsSkelton = lazy(() =>
  import("./pages/skelton/restaurants/Restaurants")
);
const RestaurantsDetailSkelton = lazy(() =>
  import("./pages/skelton/restaurants/detail/RestaurantDetail")
);
const ContactSkimmer = lazy(() =>
  import("./pages/skelton/contact/ContactSkimmer")
);

// import Help from "./pages/Help";
// import Menu from "./pages/Menu";

function App() {
  const statePosition = useSelector((state) => state.user.position);
  const sessionPosition = JSON.parse(window.sessionStorage.getItem("position"));
  const position = sessionPosition || statePosition;

  const length = Object.keys(position).length;

  const cart = useSelector((state) => state.cart.cart);

  const isCart = cart.length;
  const router = createBrowserRouter([
    {
      path: "/",
      element:
        length > 0 ? (
          <Suspense fallback={<HomeSkimmer />}>
            <AppLayout />
          </Suspense>
        ) : (
          <Navigate to="/location" replace />
        ),
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<HomeSkimmer />}>
              <Home />
            </Suspense>
          ),
          action: getLocation,
        },
        {
          path: "/contact",
          element: (
            <Suspense fallback={<ContactSkimmer />}>
              <Contact />
            </Suspense>
          ),
        },
        {
          path: "/restaurants",
          element: (
            <Suspense fallback={<RestaurantsSkelton />}>
              <Restaurants />
            </Suspense>
          ),
          loader: restaurantLoader,
          errorElement: <Error />,
        },
        {
          path: "/restaurant/:id",
          element: (
            <Suspense fallback={<RestaurantsDetailSkelton />}>
              <Restaurant />
            </Suspense>
          ),
          errorElement: <Error />,
        },
        {
          path: "/order",
          element:
            isCart > 0 ? (
              <Suspense fallback={<SpinnerFullPage />}>
                <Order />
              </Suspense>
            ) : (
              <EmptyCart />
            ),
        },
        {
          path: "/thank-you",
          element: (
            <Suspense fallback={<SpinnerFullPage />}>
              <ThankYou />
            </Suspense>
          ),
        },

        {
          path: "*",
          element: <PageNotFound />,
        },
      ],
    },
    {
      path: "/location",
      element:
        length === 0 ? (
          <Suspense fallback={<LocationSkimmer />}>
            <Location />
          </Suspense>
        ) : (
          <Navigate to="/" replace={true} />
        ),
      action: getLocation,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
