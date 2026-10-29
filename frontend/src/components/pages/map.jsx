import * as maplibregl from "https://unpkg.com/maplibre-gl@6.16.0/dist/maplibre-gl.mjs"
import { useEffect } from "react";
import "./map.css"

const addMap = () => {
    const mapContainer = document.getElementById("tabs");

    const map = new maplibregl.Map({
        container: mapContainer,
        zoom: "15",
        center: [73.9821243,18.5733721],
        style: "https://tiles.openfreemap.org/styles/bright"
    });
}




export default () => {
    useEffect(addMap, []);
    return (
        <div className="map-container">
            <div className="map" id="map">
                <div className="filters">
                    <i className="fa-solid fa-layer-group services"></i>
                </div>
                
            </div>
            <div className="details-page">

            </div>
        </div>
    );
}