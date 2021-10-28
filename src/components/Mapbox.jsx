// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import React, { useEffect, useRef, useState } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import "../Mapbox.css";
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

function Mapbox() {

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
        <div className="col-lg-6 p-4 mt-3 ">
            <div ref={mapContainer} className="map-container contact--map" />
        </div>
    )
}

export default Mapbox