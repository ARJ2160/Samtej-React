import Navbar from "./components/HeroNavbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Awards from "./components/Awards"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ShirtMachines from "./components/Products/ShirtMachines"
import CardMachines from "./components/Products/CardMachines"
import Goodshit from "./components/Products/Goodshit"
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
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
                <Route exact path="/goodshit">
                    <Navbar />
                    <Goodshit />
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
