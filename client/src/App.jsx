import "./App.css";
import Navbar from "./layout/navbar";
import Services from "./sections/Services";
import HeroBanner from "./sections/heroBanner";

function App() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <Services/>
    </>
  );
}

export default App;
