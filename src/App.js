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
      <Announcement />
      <Home />
      <Offer />
      <Footer />
    </>
  );
}

export default App;
