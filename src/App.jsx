import { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";

import Restaurants, { loader as restaurantLoader } from "./pages/Restaurants";
import Restaurant from "./pages/Restaurant";
import Location, { action as getLocation } from "./pages/Location";
import AppLayout from "./ui/AppLayout";
import Spinner from "./ui/Spinner";
import Error from "./ui/Error";
import Order from "./features/order/Order";
// import Help from "./pages/Help";
// import Menu from "./pages/Menu";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        action: getLocation,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/location",
        element: <Location />,
        action: getLocation,
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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
