import React from 'react'
import shirt_prints from "../../shirt-products"
import "../../index.css"
import GetInTouch from '../GetInTouch'

const ShirtMachines = () => {
    return (
        <section id="cardmachines">
            <GetInTouch />
            <div className="row product-section side-padding pt-4 me-0 justify-content-center general-padding">
                <h1 className="text-center product-heading pt-5 pb-3">T-Shirt Printing Machines</h1>
                {shirt_prints.map(prod => {
                    const { id, img, card_title, dimensions, power, plate_size, batch_time } = prod
                    return (
                        <div className="card align-items-center m-2 pe-0 ps-0" style={{ width: '18rem' }} key={id}>
                            <img src={img} className="card-img-top" alt="Shirt Machines" />
                            <div className="card-body">
                                <h5 className="card-title">{card_title}</h5>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>Dimensions:  </strong>{dimensions}</li>
                                <li className="list-group-item"><strong>Power:  </strong>{power}</li>
                                <li className="list-group-item"><strong>Plate Size:  </strong>{plate_size}<br />  Customisable as per requirement.</li>
                                <li className="list-group-item"><strong>Batch Size:  </strong>{batch_time}</li>
                            </ul>
                        </div>
                    )}
                )}
                </div>
        </section>
    )
}

export default ShirtMachines
