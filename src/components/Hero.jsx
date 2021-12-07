import React, { useState, useEffect  } from 'react'
import "../index.css"
import card from "../assets/hero_card.svg"
import { Dropdown } from 'react-bootstrap';

const Hero = () => {

    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [blink, setBlink] = useState(true);
    const [reverse, setReverse] = useState(false);
    const words = ["Simplifying Card Manufacturing"]
    
    // TYPEWRITER LOGIC
    useEffect(() => {

        //Typewriter effect
        if (index === words.length) return;

        if ( subIndex === words[index].length + 1 &&
            index !== words.length - 1 && !reverse ) {
            setReverse(true);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => prev + 1);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 :
                    150, parseInt(Math.random() * 100)));

        return () => clearTimeout(timeout);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [subIndex, index, reverse]);

    //BLINK LOGIC
    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink]);

    return (
        <section id="hero">
            <div className="hero--section side-padding d-flex flex-column justify-content-between">
                <div className="hero--section-upper">
                    <div className="row hero--header" style={{ margin: 'auto'}}>
                        <div className="col-lg-6 p-3">
                            <h1 className="hero--header-text">
                                {`${words[index].substring(0, subIndex)}${blink ? "|" : ""}`}
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="hero--section-bottom row p-3" style={{ margin: 'auto'}}>
                    <div className="hero--section-card col-lg-6">
                        <img data-aos="fade-up" className="hero--card img-fluid" src={card} alt="hero-card" />
                    </div>
                    <div data-aos="fade-up" className="hero--bottom-text text-end lead pt-5 col-lg-6" style={{ fontSize: "1.65rem" }}>
                        <h4>We deliver quality products at affordable prices.</h4>
                        <h4>Our goal is to provide Smart Card solutions.</h4>
                        <h4>We solely manufacture fully automated hydraulic fusing machines, motorised card cutters and T-shirt printing machines.</h4>
                        <h4>Our aim is to deliver quality products with maximum customer satisfaction.</h4>
                        <div className="hero--bottom--buttons align-items-center">
                            <div className="dropdown-button">
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic" className="hero--button hero--dropdown--button">
                                        Our Products
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="/shirtmachines">T-Shirt Printing Machine</Dropdown.Item>
                                        <Dropdown.Item href="/cardmachines">Card Cutter Machines</Dropdown.Item>
                                        <Dropdown.Item href="/heatmachines">Heat Press Fusing Machines</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="about-button">
                                <a href="#about">
                                    <button className="hero--button hero--about-button" rel="noreferrer">
                                        About Us
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero