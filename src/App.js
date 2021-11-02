import Navbar from "./components/HeroNavbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Awards from "./components/Awards"
import Contact from "./components/Contact"
import CustomCarousel from "./components/CustomCarousel"
import Footer from "./components/Footer"

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Services />
            <Awards />
            <Contact />
            <CustomCarousel />
            <Footer />
        </div>
  );
}

export default App;
