import { Suspense, lazy } from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
  useRoutes,
} from "react-router-dom";
import { useSelector } from "react-redux";

// import Home from "./pages/Home";
// import Contact from "./pages/Contact";

import PageNotFound from "./pages/PageNotFound";

import Restaurants, { loader as restaurantLoader } from "./pages/Restaurants";
import Restaurant from "./pages/Restaurant";
import Location, { action as getLocation } from "./pages/Location";
import AppLayout from "./ui/AppLayout";
import Spinner from "./ui/Spinner";
import Error from "./ui/Error";
import Order from "./features/order/Order";
import SpinnerFullPage from "./ui/SpinnerFullPage";

const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));

function Routes({ length }) {
  console.log(length);
  const router = createBrowserRouter([
    {
      path: "/",
      element: length ? <AppLayout /> : <Navigate to="/location" />,
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
          element: <Order />,
        },
        {
          path: "*",
          element: <PageNotFound />,
        },
      ],
    },
    {
      path: "/location",
      element: !length ? <Location /> : <Navigate to="/" />,
      action: getLocation,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Routes;
