import Navbar from "./components/HeroNavbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Awards from "./components/Awards"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ShirtMachines from "./components/Products/ShirtMachines"
import CardMachines from "./components/Products/CardMachines"
import HeatMachines from "./components/Products/HeatMachines"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

function App() {

    useEffect(() => {
        Aos.init({
            duration: 2000,
            once: true,
        })
    }, [])

    return (
        <Router>
            <div className="App">
                <Route exact path="/shirtmachines">
                    <Navbar />
                    <ShirtMachines />
                    <Footer />
                </Route>
                <Route exact path="/cardmachines">
                    <Navbar />
                    <CardMachines />
                    <Footer />
                </Route>
                <Route exact path="/heatmachines">
                    <Navbar />
                    <HeatMachines />
                    <Footer />
                </Route>
                <Route exact path="/">
                    <Navbar />
                    <Hero />
                    <Services />
                    <Awards />
                    <Contact />
                    <Footer />
                </Route>
            </div>
        </Router>
    );
}

export default App;
