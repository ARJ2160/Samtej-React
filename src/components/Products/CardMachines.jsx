import React from 'react'
import card_products from "../../card-product"
import "../../index.css"

function CardMachines() {
    return (
        <section id="cardmachines">
            <div className="row product-section side-padding justify-content-center pt-5 me-0 general-padding">
                <h1 className="text-center product-heading pt-5 pb-3">Card Making Machines</h1>
                {card_products.map((cards) => {
                    const { id, img, card_title, card_body, cut_size, dimensions, power, capacity } = cards
                    return (
                        <div className="card align-items-center col-lg-4 m-2 pe-0 ps-0" style={{ width: '18rem' }} key={id}>
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
                            {/* <div className="card-body">
                                <a href="#" className="card-link">Card link</a>
                                <a href="#" className="card-link">Another link</a>
                            </div> */}
                        </div>
                    )}
                )}
                </div>
        </section>
    )
}

export default CardMachines