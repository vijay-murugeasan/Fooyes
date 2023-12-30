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
import Spinner from "./ui/Spinner";
import Error from "./ui/Error";
import Order from "./features/order/Order";
import SpinnerFullPage from "./ui/SpinnerFullPage";
import ThankYou from "./features/order/ThankYou";

const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Location = lazy(() => import("./pages/Location"));
const Restaurant = lazy(() => import("./pages/Restaurant"));
const Restaurants = lazy(() => import("./pages/Restaurants"));

// import Help from "./pages/Help";
// import Menu from "./pages/Menu";

function App() {
  const statePosition = useSelector((state) => state.user.position);
  const sessionPosition = JSON.parse(window.sessionStorage.getItem("position"));
  const position = sessionPosition || statePosition;

  const length = Object.keys(position).length;

  const router = createBrowserRouter([
    {
      path: "/",
      element:
        length > 0 ? (
          <Suspense fallback={<SpinnerFullPage />}>
            <AppLayout />
          </Suspense>
        ) : (
          <Navigate to="/location" replace={true} />
        ),
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<SpinnerFullPage />}>
              <Home />
            </Suspense>
          ),
          action: getLocation,
        },
        {
          path: "/contact",
          element: (
            <Suspense fallback={<SpinnerFullPage />}>
              <Contact />
            </Suspense>
          ),
        },
        {
          path: "/restaurant",
          element: (
            <Suspense fallback={<Spinner />}>
              <Restaurants />
            </Suspense>
          ),
          loader: restaurantLoader,
          errorElement: <Error />,
        },
        {
          path: "/restaurant/:id",
          element: <Restaurant />,
          errorElement: <Error />,
        },
        {
          path: "/order",
          element: (
            <Suspense fallback={<SpinnerFullPage />}>
              <Order />
            </Suspense>
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
          <Suspense fallback={<SpinnerFullPage />}>
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
