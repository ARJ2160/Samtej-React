import React, { useEffect, useState, Suspense, lazy } from 'react'
import "../index.css"
import { FaFacebook, FaLinkedin, FaShoppingCart } from 'react-icons/fa';
import Aos from "aos"
import "aos/dist/aos.css"

const Map = lazy(() => import('./Map'));

const Contact = () => {
    
    useEffect(() => {
        Aos.init({
            duration: 2000,
            once: true,
        })
    }, [])

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
            <div data-aos="fade-up">
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
                        <button type="submit" className="submit-btn mt-3" onClick={sendData}>Submit</button>
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
                                <div className="footer--social--icons d-flex">
                                    <a href="https://www.facebook.com/SanjayJoshiSLK/" style={{color: "#ffffff"}} target="_blank" rel="noreferrer">
                                        <FaFacebook className="img-fluid me-5 mt-4" style={{ width: "40px", height: "40px" }}/>
                                    </a>
                                    <a href="https://www.linkedin.com/in/sanjay-joshi-339ab126?fromQR=1" style={{color: "#ffffff"}} target="_blank" rel="noreferrer">
                                        <FaLinkedin className="img-fluid me-5 mt-4" style={{ width: "40px", height: "40px" }}/>
                                    </a>
                                    <a href="https://www.indiamart.com/samtej-industries/" style={{color: "#ffffff"}} target="_blank" rel="noreferrer">
                                        <FaShoppingCart className="img-fluid me-5 mt-4" style={{ width: "40px", height: "40px" }}/>
                                    </a>
                                </div>
                            </div>
                            <div className="contact--number pt-5">
                                <h1>Contact Details</h1>
                                <div className="contact--mail-nos mt-3">
                                    <span className="lead" style={{ fontSize: '15px' }}>samtejindustriesllp@gmail.com<br/>9822214198<br/>8796666160</span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Suspense fallback={<h1>Still Loading…</h1>}>
                        <Map />
                    </Suspense>
                </div>
            </div>
        </section>
    )
}

export default Contact