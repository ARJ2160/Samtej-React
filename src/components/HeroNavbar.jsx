import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../index.css"
import company_logo from "../assets/brand_logo.webp"
import { Container, Navbar, Nav } from 'react-bootstrap';

const HeroNavbar = () => {
    
    return (
        <Navbar className="main--navigation" bg="light" expand="lg" fixed="top" style={{ backgroundColor: "#eafcfc !important" }}>
            <Container>
                <Navbar.Brand href="#"><img src={company_logo} style={{width: "50px", height: "50px"}} alt="" /></Navbar.Brand>
                <Navbar.Brand href="#hero">SamTej Industries</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#about" className="me-5">About</Nav.Link>
                        <Nav.Link href="#awards" className="me-5">Awards</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default HeroNavbar