import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Navbar.css"
import group_7 from "../assets/group_7.png"
// import {
//     Nav,
//     NavLink,
//     Bars,
//     NavMenu,
//     NavBtn,
//     NavBtnLink
// } from './NavbarElements';

const Navbar = () => {
    return (
    //     <Nav>
    //         <NavLink to='/'>
    //                 <img src={group_7} style={{width: "50px", height: "50px" }} alt='logo' />
    //         </NavLink>
    //         <Bars />
    //         <NavMenu>
    //             <NavLink to='#about'>
    //                 About
    //             </NavLink>
    //             <NavLink to='/services'>
    //                 Services
    //             </NavLink>
    //             <NavLink to='/contact-us'>
    //                 Contact Us
    //             </NavLink>
    //             <NavLink to='/sign-up'>
    //                 Sign Up
    //             </NavLink>
    //         </NavMenu>
    //         <NavBtn>
    //             <NavBtnLink to='/signin'>Sign In</NavBtnLink>
    //         </NavBtn>
    //   </Nav>
        <div className="main--navigation">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="index.html"><img className="img-fluid" src={group_7} width="60" height="60" alt="samtej logo" />SamTej Industries</a>
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse">
                        <span className="toggler-icon top-bar"></span>
                        <span className="toggler-icon middle-bar"></span>
                        <span className="toggler-icon bottom-bar"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav main--navlinks">
                            <a className="nav-link" href="about.html">About</a>
                            <a className="nav-link" href="events.html">Events</a>
                            <a className="nav-link" href="contact.html">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar


