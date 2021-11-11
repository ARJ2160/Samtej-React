import React from 'react'
import good_shit from "../../good-shit"
import "../../index.css"

function Goodshit() {
    return (
        <section id="cardmachines">
            <div className="row product-section side-padding pt-5 me-0">
                <h1 className="text-center pt-5">A lot of Good Shit</h1>
                {good_shit.map((shit) => {
                    const { id, img, card_body, plate_size ,power, capacity } = shit
                    return (
                        <div className="card align-items-center col-lg-4 m-2" style={{ width: '18rem' }} key={id}>
                            <img src={img} class="card-img-top img-fluid" alt="products" loading="lazy"  />
                            <div class="card-body">
                                <h5 class="card-title">{card_body}</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <ul class="list-group list-group-flush">
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

export default Goodshit
