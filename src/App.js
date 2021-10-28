import './App.css';
import Hero from "./components/Hero"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Services from "./components/Services"
import Awards from "./components/Awards"
import Footer from "./components/Footer"
// import Carousell from "./components/Carousel"
import { BrowserRouter as Router } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
            </Router>
            <Hero />
            <Services />
            <Awards />
            <Contact />
            {/* <Carousell /> */}
            <Footer />
        </div>
  );
}

export default App;
