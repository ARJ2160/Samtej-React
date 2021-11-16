import React, { useEffect } from 'react'
import "../index.css"
import services from "../services-data.js"
import Aos from "aos"
import "aos/dist/aos.css"

const Services = () => {

    useEffect(() => {

        Aos.init({
            duration: 2000,
            once: true
        })
    }, [])

    return (
        <section id="about">
            <div className="services side-padding">
                <div data-aos="fade-left">
                    <h1 className="general--padding text-center">Looking for a way to enter the card manufacturing industry? If so, then we have the complete package for you!</h1>
                    <div className="services-list lead ">
                        <ul>
                            {services.map((service, id) => {
                                return (
                                    <li key={id}>{service.desc}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services