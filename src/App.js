// import "./App.css";
import Food from "./components/Food";
import Navbar from "./components/Navbar";
import TopBanner from "./components/TopBanner";
import Services from "./components/Services";
import BestSelling from "./components/BestSelling";
import Packaging from "./components/Packaging";
function App() {
  return (
    <div className="App">
      <Navbar />
      <TopBanner />
      <Food />
      <Services />
      <BestSelling />
      <Packaging />
    </div>
  );
}

export default App;
