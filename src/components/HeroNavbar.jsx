import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Navbar.css"
import company_logo from "../assets/brand_logo.png"
import { Container, Navbar, Nav } from 'react-bootstrap';

const HeroNavbar = () => {
    
    return (
        <Navbar className="main--navigation" bg="light" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="#"><img src={company_logo} style={{width: "50px", height: "50px"}} alt="" /></Navbar.Brand>
                <Navbar.Brand href="#">SamTej Industries</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#awards">Awards</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default HeroNavbar