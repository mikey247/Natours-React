//

import Announcement from "./components/Announcement";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Register from "./pages/Register";

import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <NavBar />
      <Announcement
        text={"THE MOST AMAZING LOCATIONS FOR THE BEST PRICES.✌🏾"}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
