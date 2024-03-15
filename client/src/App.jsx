import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserDashboard from "./pages/UserDashboard";
import Helper from "./pages/Helper";
import UserDetails from "./pages/UserDetails";
import PrivateRoutes from "./PrivateRoute";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/user-dashboard" exact element={<UserDashboard />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="/helper/:id" element={<Helper />} />
          <Route path="/user-details" element={<UserDetails />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
