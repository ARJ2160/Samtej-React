import React from 'react'
import card_products from "../../card-product"
import "../../index.css"
import GetInTouch from '../GetInTouch'

const CardMachines = () => {
    return (
        <section id="cardmachines">
            <GetInTouch />
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