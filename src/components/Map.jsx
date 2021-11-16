import React from 'react'
import "../index.css"
import BingMapsReact from "bingmaps-react";
require('dotenv').config()

const Map = () => {

    return (
        <div className="col-lg-6 p-4 mt-3 contact--map">
            <BingMapsReact
                bingMapsKey="AoA_wWImy_NyIVWxAUtJGkIqAwhnxaTzhKVVrGLBfT80S4R4HFESaL5DTh-6zz79"
                onMapReady={null}
                mapOptions={{
                navigationBarMode: "square",
                }}
                viewOptions={{
                    center: { latitude: 18.462329864338695, longitude: 73.81365477686839 },
                    zoom: 19,
                    mapTypeId: "road",
                }}
            />
        </div>
    )
}

export default Map