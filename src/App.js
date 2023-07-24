// import "./App.css";
import Food from "./components/Food";
import Navbar from "./components/Navbar";
import TopBanner from "./components/TopBanner";
import Services from "./components/Services";
import BestSelling from "./components/BestSelling";
import Packaging from "./components/Packaging";
import Reviews from "./components/Reviews";
import BottomBanner from "./components/BottomBanner";
import BottomAddressBar from "./components/BottomAddressBar";
import BottomNavContent from "./components/BottomNavContent";
import Footer from "./components/Footer";
import VetsSuggestion from "./components/VetsSuggestion";
function App() {
  return (
    <div className="App">
      <Navbar />
      <TopBanner />
      <Food />
      <Services />
      <BestSelling />
      <Packaging />
      <VetsSuggestion />
      <Reviews />
      <BottomBanner />
      <BottomAddressBar />
      <BottomNavContent />
      <Footer />
    </div>
  );
}

export default App;
