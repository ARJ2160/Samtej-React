/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import die_punch_cutter from "../assets/carousel/die_punch_cutter.jpeg"
import card_cutter from "../assets/carousel/motorized_card_cutter.jpg"
// import Carousel from 'react-bootstrap/Carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "../Carousel.css"


function Carousell() {
        
    return (
        <Carousel>
            <div>
                <img src={die_punch_cutter} className="img1" alt="card cutter"/>
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={card_cutter} alt="card cutter"/>
                <p className="legend">Legend 2</p>
            </div>
        </Carousel>
    );
}

export default Carousell






//const [index, setIndex] = useState(0);
//     const handleSelect = (selectedIndex, e) => {
//         setIndex(selectedIndex);
//     };

//     return (
//        <Carousel activeIndex={index} onSelect={handleSelect}>
// <Carousel.Item>
//     <img
//     className="img-fluid d-block w-100"
//     src={die_punch_cutter}
//     alt="First slide"
//     />
//     <Carousel.Caption>
//     <h3>First slide label</h3>
//     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//     </Carousel.Caption>
// </Carousel.Item>
// <Carousel.Item>
//     <img
//     className="img-fluid d-block w-100"
//     src={card_cutter}
//     alt="Second slide"
//     />

//     <Carousel.Caption>
//     <h3>Second slide label</h3>
//     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//     </Carousel.Caption>
// </Carousel.Item>
// </Carousel>
//     );



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