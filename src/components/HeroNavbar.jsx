import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import company_logo from "../assets/brand_logo.webp"
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
// import { FaBars } from 'react-icons/fa';
// import { links, social, sublinks } from './data';
import "../index.css"

const HeroNavbar = () => {

    return (
        <Navbar className="main--navigation" expand="lg" style={{ backgroundColor: "#b8c1ec", color: "#000000"}}>
            <Container>
                <Navbar.Brand href="/"><img src={company_logo} style={{width: "50px", height: "50px"}} alt="brand-logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavDropdown title="Products" className="me-5" id="basic-nav-dropdown" style={{ color: "#000000" }}>
                            <NavDropdown.Item href="/shirtmachines">Shirt Printing Machine</NavDropdown.Item>
                            <NavDropdown.Item href="/cardmachines">Card Manufacturing Machine</NavDropdown.Item>
                            <NavDropdown.Item href="/heatmachines">Heat Fusing Machines</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/#about" className="me-5" style={{ color: "#000000" }}>About</Nav.Link>
                        <Nav.Link href="/#awards" className="me-5" style={{ color: "#000000" }}>Awards</Nav.Link>
                        <Nav.Link href="/#contact" style={{ color: "#000000" }}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default HeroNavbar

// return (
    //     <nav>
    //         <div className='nav-center'>
    //             <div className='nav-header'>
    //                 <a href="/">
    //                     <img src={company_logo} className='logo' style={{width: "50px", height: "50px"}} alt="brand-logo" />
    //                 </a>
    //                 <button className={`${showLinks ? 'nav-toggle transform' : 'nav-toggle'}`} onClick={toggleLinks}>
    //                     <span className="toggler-icon top-bar"></span>
    //                     <span className="toggler-icon middle-bar"></span>
    //                     <span className="toggler-icon bottom-bar"></span>
    //                 </button>
    //             </div>
    //             <div className={`${showLinks ? 'links-container show': 'links-container' }`}>
    //                 <div className="drop">
    //                     Products
    //                     <div className={`${showLinks ? 'drop-menu show d-flex': 'drop-menu d-flex' }`}>
    //                         <a href="/shirtmachines" class="dropdown-links">
    //                             Shirt Printing Machine
    //                         </a>
    //                         <a href="/cardmachines" class="dropdown-links">
    //                             Card Manufacturing Machine
    //                         </a>
    //                         <a href="/goodshit" class="dropdown-links">
    //                             Some Good Shit
    //                         </a>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="nav-links">
    //                 <a href="#awards">Awards</a>
    //                 <a href="#contact">Contact</a>
    //                 <a href="#awards">Awards</a>
    //             </div>
    //         </div>
    //     </nav>
    // )