import React from 'react'
import "../Navbar.css"
import group_7 from "../assets/group_7.png"

const Navbar = () => {
    return (
        <div className="main--navigation">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                    <a className="navbar-brand" href="index.html"><img className="img-fluid" src={group_7} width="60" height="60" style={{ color: 'black' }} alt = ""/></a>
                    <span className="navbar-brand-name">SamTej Industries LLP</span>
                        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="toggler-icon top-bar"></span>
                            <span className="toggler-icon middle-bar"></span>
                            <span className="toggler-icon bottom-bar"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                            <div className="navbar-nav main--navlinks">
                            <a className="nav-link me-5" href="#about" style={{color: 'black'}}>About</a>
                            <a className="nav-link me-5" href="#awards" style={{color: 'black'}}>Awards</a>
                            <a className="nav-link me-1" href="#contact" style={{color: 'black'}}>Contact</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
    )
}

export default Navbar

// alt="Samtej Industries" 