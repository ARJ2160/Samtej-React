import React from 'react'
import card_products from "../../card-product"
import "../../index.css"

function CardMachines() {
    return (
        <section id="cardmachines">
            <div className="row product-section side-padding pt-5 me-0">
                <h1 className="text-center pt-5">Card Making Machines</h1>
                {card_products.map((cards) => {
                    const { id, img, card_body, cut_size, power, frequency, capacity } = cards
                    return (
                        <div className="card align-items-center col-lg-4 m-2" style={{ width: '18rem' }} key={id}>
                                <img src={img} class="card-img-top" alt="Card Machines" loading="lazy" />
                                <div class="card-body">
                                    <h5 class="card-title">{card_body}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">{cut_size}</li>
                                    <li class="list-group-item">{frequency}</li>
                                    <li class="list-group-item">{power}</li>
                                    <li class="list-group-item">{capacity}</li>
                                </ul>
                                {/* <div class="card-body">
                                    <a href="#" class="card-link">Card link</a>
                                    <a href="#" class="card-link">Another link</a>
                                </div> */}
                                </div>
                    )}
                )}
                </div>
        </section>
    )
}

export default CardMachines