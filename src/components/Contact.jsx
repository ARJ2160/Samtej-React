import React, { useEffect, useRef, useState } from 'react'
import "../Contact.css"
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
// eslint-disable-line import/no-webpack-loader-syntax

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

    //MAP CONFIG
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng] = useState(73.81365477686839);
    const [lat] = useState(18.462329864338695);
    const [zoom] = useState(17);
    mapboxgl.accessToken = 'pk.eyJ1IjoiYXJqLTIxIiwiYSI6ImNrdDFlaDZwZTA5aWszNnBnNzVrZHh4N3cifQ.Igap8G_1_t9qC_1zyt_ARw';

    useEffect(() => {

        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
    });

    return (
        <section id="contact">
            <h1 className="contact text-white">Contact Us</h1>
            <div className="row ">
                <div className="form col-lg-6 p-4">
                    <form method = "post" name="google-sheet">
                        <div className="txt-field">
                            <input
                                type="text"
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
                </div>
                <div className="col-lg-6 p-4 ">
                    <div ref={mapContainer} className="map-container" style={{height: "50vh", width: "45vw"}}/>
                </div>
            </div>
        </section>
    )
}

export default Contact