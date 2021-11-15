import React from 'react'
import shirt_prints from "../../shirt-products"
import "../../index.css"

function ShirtMachines() {
    return (
        <section id="cardmachines">
            <div className="row product-section side-padding pt-5 me-0 justify-content-center general-padding">
                <h1 className="text-center product-heading pt-5 pb-3">Shirt Printing Machines</h1>
                {shirt_prints.map((shirts) => {
                    const { id, img, card_title, dimensions, power, plate_size, batch_time } = shirts
                    return (
                        <div className="card align-items-center col-lg-4 m-2 pe-0 ps-0" style={{ width: '18rem' }} key={id}>
                            <img src={img} className="card-img-top" alt="Shirt Machines" />
                            <div className="card-body">
                                <h5 className="card-title">{card_title}</h5>
                                {/* <p className="card-text">{card_body}</p> */}
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>Dimensions:  </strong>{dimensions}</li>
                                <li className="list-group-item"><strong>Power:  </strong>{power}</li>
                                <li className="list-group-item"><strong>Plate Size:  </strong>{plate_size}</li>
                                <li className="list-group-item"><strong>Batch Size:  </strong>{batch_time}</li>
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

export default ShirtMachines
