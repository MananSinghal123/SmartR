import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserDashboard from "./pages/UserDashboard";
import Helper from "./pages/Helper";
import UserDetails from "./pages/UserDetails";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/helper" element={<Helper />} />
          <Route path="/user-details" element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
