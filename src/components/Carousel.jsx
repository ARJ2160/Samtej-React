/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import die_punch_cutter from "../assets/carousel/die_punch_cutter.jpeg"
import card_cutter from "../assets/carousel/motorized_card_cutter.jpg"
import Carousel from 'react-bootstrap/Carousel'

function Carousell() {
    return (
        function ControlledCarousel() {
            const [index, setIndex] = useState(0);
          
            const handleSelect = (selectedIndex, e) => {
              setIndex(selectedIndex);
            };
          
            return (
              <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=First slide&bg=373940"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Second slide&bg=282c34"
                    alt="Second slide"
                  />
          
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                  />
          
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            );
          }
    )
}

export default Carousell



// <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        //     <div className="carousel-indicators">
        //         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        //         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        //         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        //     </div>
        //     <div className="carousel-inner">
        //         <div className="carousel-item active">
        //             <img src={die_punch_cutter} className="d-block w-100" alt="..."/>
        //             <div className="carousel-caption d-none d-md-block text-black">
        //                 <h5>Motorized Card Cutter</h5>
        //                 <p>Dimensions : 360 x 550 x 290 mm <br />
        //                     Approx .Power : 375 W, 230V AC <br />
        //                     Speed : 1800 Cards per hour. <br />
        //                     CuttingSize : 86 x 54 x 1.2 mm </p>
        //             </div>
        //         </div>
        //         <div className="carousel-item">
        //             <img src="..." className="d-block w-100" alt="..."/>
        //             <div className="carousel-caption d-none d-md-block">
        //                 <h5>Second slide label</h5>
        //                 <p>Some representative placeholder content for the second slide.</p>
        //             </div>
        //         </div>
        //         <div className="carousel-item">
        //             <img src={card_cutter} className="d-block w-100" alt="..."/>
        //             <div className="carousel-caption d-none d-md-block">
        //                 <h5>Third slide label</h5>
        //                 <p>Some representative placeholder content for the third slide.</p>
        //             </div>
        //         </div>
        //     </div>
        //     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        //         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        //         <span className="visually-hidden">Previous</span>
        //     </button>
        //     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        //         <span className="carousel-control-next-icon" aria-hidden="true"></span>
        //         <span className="visually-hidden">Next</span>
        //     </button>
        // </div>