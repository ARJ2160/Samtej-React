import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../index.css"
import company_logo from "../assets/brand_logo.webp"
import { Container, Navbar, Nav } from 'react-bootstrap';

const HeroNavbar = () => {
    
    return (
        <Navbar className="main--navigation" expand="lg" fixed="top" style={{ backgroundColor: "#D1E8E4" }}>
            <Container>
                <Navbar.Brand href="#"><img src={company_logo} style={{width: "50px", height: "50px"}} alt="brand-logo" /></Navbar.Brand>
                {/* <Navbar.Brand href="#">SamTej Industries</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#about" className="me-5" style={{ color: "#000000" }}>About</Nav.Link>
                        <Nav.Link href="#awards" className="me-5" style={{ color: "#000000" }}>Awards</Nav.Link>
                        <Nav.Link href="#contact" style={{ color: "#000000" }}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default HeroNavbar