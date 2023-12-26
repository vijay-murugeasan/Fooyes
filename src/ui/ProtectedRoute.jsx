import { useNavigate, useNavigation } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import SpinnerFullPage from "./SpinnerFullPage";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  // 1. Load the authenticated user
  const position = useSelector((state) => state.user.position);

  // 2. If there is NO authenticated user, redirect to the /location
  useEffect(
    function () {
      console.log(position);
      if (!Object.keys(position).length) navigate("/location");
    },
    [navigate, position]
  );

  // 3. While loading, show a spinner
  if (isLoading) return <SpinnerFullPage />;

  // 4. If there IS a user, render the app
  if (!Object.keys(position).length) return children;
}

export default ProtectedRoute;
