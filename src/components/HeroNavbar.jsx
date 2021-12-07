import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import company_logo from "../assets/brand_logo.webp"
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import "../index.css"

const HeroNavbar = () => {

    return (
        <Navbar className="main--navigation" expand="lg" style={{ backgroundColor: "#b8c1ec", color: "#000000", fontWeight: "600" }}>
            <Container>
                <Navbar.Brand href="/"><img src={company_logo} style={{width: "50px", height: "50px"}} alt="brand-logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavDropdown title="Products" className="me-5 nav-dropdown" id="basic-nav-dropdown" style={{ color: "#000000" }}>
                            <NavDropdown.Item href="/shirtmachines">T-Shirt Printing Machine</NavDropdown.Item>
                            <NavDropdown.Item href="/cardmachines">Card Cutter Machines</NavDropdown.Item>
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