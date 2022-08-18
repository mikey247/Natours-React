//

import Announcement, { CircleIndicator } from "./components/Announcement";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Register from "./pages/Register";

import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import NotFound from "./pages/404";
import ToursList from "./pages/ToursList";
import TourDetail from "./pages/TourDetail";

function App() {
  return (
    <>
      <NavBar />
      <Announcement
        text={"THE MOST AMAZING LOCATIONS FOR THE BEST PRICES.✌🏾"}
      />
      <CircleIndicator />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tours-list" element={<ToursList />} />
        <Route path="/tour/:id" element={<TourDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
