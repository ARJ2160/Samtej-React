import Navbar from "./components/HeroNavbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Awards from "./components/Awards"
import Contact from "./components/Contact"
// import ControlledCarousel from "./components/ControlledCarousel"
import Footer from "./components/Footer"

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Services />
            <Awards />
            <Contact />
            {/* <ControlledCarousel/> */}
            <Footer />
        </div>
  );
}

export default App;
