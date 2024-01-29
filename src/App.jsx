import "./App.css";
import About from "./Components/About/About";
import Banner from "./Components/Banner/Banner";
import Blog from "./Components/Blog/Blog";
import Concern from "./Components/Concern/Concern";
import Copywrite from "./Components/Footer/Copywrite";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Location from "./Components/Location/Location";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";
import Suppliers from "./Components/Suppliers/Suppliers";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <Suppliers />
      <Services />
      <About />
      <Concern />
      <Blog />
      <Location />
      <Footer />
      <Copywrite />
    </>
  );
}

export default App;
