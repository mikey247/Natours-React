//

import Announcement from "./components/Announcement";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Offer from "./components/Offer";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <NavBar />
      <Announcement
        text={"THE MOST AMAZING LOCATIONS FOR THE BEST PRICES.✌🏾"}
      />
      <Home />
      <Offer />
      <Footer />
    </>
  );
}

export default App;
