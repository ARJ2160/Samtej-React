import React from 'react'
import "../index.css"
import card from "../assets/hero_card.svg"

const Hero = () => {
    
    return (
        <section id="hero">
            <div className="hero--section text-white side-padding">
                <div className="hero--section-upper">
                    <div className="row hero--header" style={{ margin: 'auto'}}>
                        <div className="col-lg-6 p-3">
                            <h1 className="hero--header-text pt-5">Simplifying Card Manufacturing</h1>
                        </div>
                    </div>
                </div>
                <div className="hero--section-bottom row p-3" style={{ margin: 'auto'}}>
                    <div className="hero--section-card col-lg-6">
                        <img className="hero--card img-fluid" src={card} alt="hero-card" />
                    </div>
                    <div className="hero--bottom-text col-lg-6"> 
                        <span style={{ fontSize: "1.65rem" }}>
                            <p className="text-end">We deliver quality products at affordable prices.</p>
                            <p className="text-end">Our goal is to provide Smart Card solutions.</p>
                            <p className="text-end">We solely manufacture fully automated hydraulic fusing machines, motorised card cutters and T-shirt printing machines.</p>
                            <p className="text-end">Our aim is to deliver quality products with maximum customer satisfaction.</p>
                        </span>
                        <div className="hero--about-button">
                            <a href="#about"><button className="btn about-button" style={{ float: 'right' }}>About Us</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
