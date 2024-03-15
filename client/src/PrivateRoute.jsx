import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const { user } = useSelector((state) => state.auth);

  // const token = document.cookie("access_token");
  console.log(user);
  return user != "" ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
