import './App.css';
import Hero from "./components/Hero"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Services from "./components/Services"
import Awards from "./components/Awards"
import Footer from "./components/Footer"
import Carousell from "./components/Carousel"
function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Services />
            <Awards />
            <Contact />
            <Carousell />
            <Footer />
        </div>
  );
}

export default App;
