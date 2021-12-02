import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import card_products from "../../card-product"
import "../../index.css"

function CardMachines() {
    return (
        <section id="cardmachines">
            <div className="d-flex justify-content-center align-items-center product-modal p-3">
                {/* <span className="text-white">Check Out our full range of products at IndiaMart.com</span> */}
                <button className="btn text-white">
                    <FaPhoneAlt className="me-4" style={{ width: "25px", height: "25px", color: "#fff" }}/>
                    Contact us Now
                </button>
            </div>
            <div className="row product-section side-padding justify-content-center pt-4 me-0 general-padding">
                <h1 className="text-center product-heading pt-5 pb-3">Card Cutter Machines</h1>
                {card_products.map(prod => {
                    const { id, img, card_title, card_body, cut_size, dimensions, power, capacity } = prod
                    return (
                        <div className="card align-items-center m-2 pe-0 ps-0" style={{ width: '18rem' }} key={id}>
                            <img src={img} className="card-img-top" alt="Card Machines" />
                            <div className="card-body">
                                <h5 className="card-title">{card_title}</h5>
                                <p className="card-text">{card_body}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>Power: </strong>{power}</li>
                                <li className="list-group-item"><strong>Dimensions: </strong>{dimensions}</li>
                                <li className="list-group-item"><strong>Cut Size: </strong>{cut_size}</li>
                                <li className="list-group-item"><strong>Capacity: </strong>{capacity}</li>
                            </ul>
                        </div>
                    )}
                )}
                </div>
        </section>
    )
}

export default CardMachines