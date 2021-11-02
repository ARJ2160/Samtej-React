import React from 'react'
// import die_punch_cutter from "../assets/carousel/die_punch_cutter.webp"
// import card_cutter from "../assets/carousel/motorized_card_cutter.webp"
// import heat_press_1 from "../assets/carousel/heat-press-1.webp"
// import heat_press_2 from "../assets/carousel/heat-press-2.webp"
// import heat_press_3 from "../assets/carousel/heat-press-3.webp"
import { Card, Button } from 'react-bootstrap';
import products from "../product-info"
import '../CustomCarousel.css'

function CustomCarousel() {
    return (
        <div className="carousel side-padding">
            <h1 className="text-center p-5 text-white bold-heading">Have a Look at our Products</h1>
            <div className="products-section d-flex justify-content-center align-items-center row me-0">
                {products.map((product, key) => {
                    if (product.type === "hydraulic-system") {
                        return (
                            <Card id={key} style={{ width: '18rem', borderRadius: '10px' }} className="col-lg-3 col-md-6 m-4">
                                <Card.Img variant="top" className="p-3" src={product.img} loading="lazy" />
                                <Card.Body>
                                    
                                    <Card.Title style={{ height: "100px" }}>{product.card_body}</Card.Title>
                                    <Card.Text className="pt-4">
                                        Power : <strong>{product.power}</strong><br />
                                        Plate Size : <strong>{product.plate_size}</strong><br />
                                        Media: <strong>{product.media}</strong><br />
                                        Capacity : <strong>{product.capacity}</strong>
                                    </Card.Text>
                                    <Button variant="dark">Read More</Button>
                                </Card.Body>
                            </Card>
                        )
                    }
                    else if (product.type === "heat-press" || product.type === "card-cutter") {
                        return (
                            <Card id={key} style={{ width: '18rem', borderRadius: '10px' }} className="col-lg-3 col-md-6 m-4">
                                <Card.Img variant="top" className="p-3" src={product.img} loading="lazy" />
                                <Card.Body>
                                    
                                    <Card.Title style={{ height: "100px" }}>{product.card_body}</Card.Title>
                                    <Card.Text className="pt-4">
                                        Power: <strong>{product.power}</strong><br />
                                        Cut Size: <strong>{product.cut_size}</strong><br />
                                        Capacity : <strong>{product.capacity}</strong>
                                    </Card.Text>
                                    <Button variant="dark">Read More</Button>
                                </Card.Body>
                            </Card>
                        )
                    }
                    /* else if (product.type === "card-cutter") {
                        return (
                            <Card id={key} style={{ width: '18rem', borderRadius: '10px' }} className="col-lg-3 col-md-6 m-4">
                                <Card.Img variant="top" className="p-3" src={product.img} loading="lazy" />
                                <Card.Body>
                                    
                                    <Card.Title style={{ height: "100px" }}>{product.card_body}</Card.Title>
                                    <Card.Text className="pt-4">
                                        Power : <strong>{product.power}</strong><br />
                                        Cut Size: <strong>{product.cut_size}</strong><br />
                                        Capacity : <strong>{product.capacity}</strong>
                                    </Card.Text>
                                    <Button variant="dark">Read More</Button>
                                </Card.Body>
                            </Card>
                        )
                    } */
                    return null
                })}
                {/* <Card style={{ width: '18rem' }} className="col-lg-3 col-md-6">
                    <Card.Img variant="top" src={heat_press_2} loading="lazy"/>
                    <Card.Body>
                        <Card.Title>Double Tray Water cooled Fully Automatic Hydraulic System</Card.Title>
                        <Card.Text>
                            Power : <strong>9.7 KW 230 V AC Three Phase</strong><br />
                            Plate Size : <strong>330 x 480 mm</strong><br />
                            Capacity : <strong>400—500 Cards 30 Minutes cycle time</strong>
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="col-lg-3 col-md-6">
                    <Card.Img variant="top" src={heat_press_3} loading="lazy"/>
                    <Card.Body>
                        <Card.Title>Three Tray Water cooled Fully Automatic Hydraulic System</Card.Title>
                        <Card.Text>
                            Power : <strong>9.7 KW 230 V AC Three Phase</strong><br />
                            Plate Size : <strong>330 x 480 mm</strong><br />
                            Capacity : <strong>400—500 Cards 30 Minutes cycle time</strong>
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="col-lg-3 col-md-6">
                    <Card.Img variant="top" src={card_cutter} loading="lazy"/>
                    <Card.Body>
                        <Card.Title>Motorised Single Card Cutter</Card.Title>
                        <Card.Text>
                            Model MCC1200
                        </Card.Text>
                        <Card.Text>
                            Power: 375W, 230V AC Single Phase
                            Speed: 900 Cards per Hour
                            Cut Size: 86 X 54 X 1.2mm
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="col-lg-3 col-md-6">
                    <Card.Img variant="top" src={card_cutter} loading="lazy"/>
                    <Card.Body>
                        <Card.Title>Motorised Single Card Cutter</Card.Title>
                        <Card.Text>
                            Model MCC1200
                        </Card.Text>
                        <Card.Text>
                            Power: 375W, 230V AC Single Phase
                            Speed: 900 Cards per Hour
                            Cut Size: 86 X 54 X 1.2mm
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card> */}
            </div>
        </div>
    )
}

export default CustomCarousel
