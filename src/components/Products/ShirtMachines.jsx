import React from 'react'
import shirt_prints from "../../shirt-products"
import "../../index.css"

function ShirtMachines() {
    return (
        <section id="cardmachines">
            <div className="row product-section side-padding pt-5 me-0">
                <h1 className="text-center pt-5">Shirt Printing Machines</h1>
                {shirt_prints.map((shirts) => {
                    const { id, img, card_body, media, power, plate_size, capacity } = shirts
                    return (
                        <div className="card align-items-center col-lg-4 m-2" style={{ width: '18rem' }} key={id}>
                                <img src={img} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{card_body}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">{media}</li>
                                    <li class="list-group-item">{plate_size}</li>
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

export default ShirtMachines
