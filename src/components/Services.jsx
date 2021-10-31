import React from 'react'
import "../index.css"
import services from "../services-data.js"

const Services = () => {
    
    return (
        <section id="about">
            <div className="services side-padding">
                <h1 className="general--padding pt-5 text-center">Looking for a way to enter the card manufacturing industry? If so, then we have the complete package for you!</h1>
                <div className="services-list lead">
                    <ul>
                        {services.map((service, id) => {
                            return (
                                <li key={id}>{service.desc}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Services
