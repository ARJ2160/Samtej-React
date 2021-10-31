import React, { useState } from 'react'
import "../index.css"
import facebook_logo from "../assets/facebook-logo.webp"
import linkedin_logo from "../assets/linkedin-profile.svg"
// import Mapbox from "./Mapbox.jsx"

const Contact = () => {
    
    //Form Settings
    const [email, setMail] = useState('');
    const [message, setMessage] = useState('');
    
    //Send Message to Google Form
    const scriptURL = 'https://script.google.com/macros/s/AKfycbz0uimyevS_X45Ky0ieFwixxh_EAcxCNv0yAz0aZx43OJlea0a0HBJYxJ5DT2rh5J89/exec'
    const form = document.forms['google-sheet']
    
    function sendData(e) {

        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(res => alert("Message sent Successfully!"))
            .catch(error => console.error('Error!', error.message))

        form.reset();
        setMail('')
        setMessage('')
    }

    return (
        <section id="contact" className="text-white side-padding">
            <span className="contact--text bold-heading">Contact Us</span>
            <div className="row me-0">
                <div className="form col-lg-6 p-3">
                    <form method = "post" name="google-sheet">
                        <div className="txt-field">
                            <input
                                type="mail"
                                name="Name"
                                placeholder="Email*"
                                value={email}
                                onChange={e => { setMail(e.target.value) }}
                                autoComplete="off"
                            />
                        </div>
                        <div className="txt-field mt-5 pt-5">
                            <input
                                type="text"
                                name="Message"
                                placeholder="Message"
                                value={message}
                                onChange={e => { setMessage(e.target.value) }}
                                autoComplete="off"
                            />
                        </div>
                    </form>
                    <button type="submit" className="btn send-request" onClick={sendData}>Submit</button>
                    <div className="contact--find-us pt-5">
                        <span className="bold-heading">Find Us</span>
                        <div className="contact--address mt-4">
                            <h1>Address</h1>
                            <span className="lead">Samtej Industries LLP SLK Hydrotechnologies,<br /> 69/1, Shripati complex Vagdaon-Dhayari TEL EXCH. BLDG.,<br/> Vagdaon (BK), Pune - 411041<br />Landmark : Next to Axis Bank or Dhareshwar Mangal Karyalaya, Dhayari Phata
                            </span>
                        </div>
                    </div>
                    <div className="contact--bottom-container">
                        <div className="contact--social-media pt-5">
                            <h1>Social Media</h1>
                            <ul className="footer--social--icons list-unstyled d-flex">
                                <li>
                                    <a href="https://www.instagram.com/arj_2160/" target="_blank" rel="noreferrer">
                                        <img src={facebook_logo} className="img-fluid me-3" style={{ width: "77px" ,height: "auto" }} alt="instagram logo" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/atharva-joshi-5657991b3/" target="_blank" rel="noreferrer">
                                        <img src={linkedin_logo} className="img-fluid" style={{ width: "77px", height: "auto" }} alt="linkedin logo" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="contact--number pt-5">
                            <h1>Contact Details</h1>
                            <div className="contact--mail-nos">
                                <span className="lead" style={{ fontSize: '15px' }}>samtejindustriesllp@gmail.com<br/>9822214198<br/>8796666160</span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Mapbox /> */}
            </div>
        </section>
    )
}

export default Contact