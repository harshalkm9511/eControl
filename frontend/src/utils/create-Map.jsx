import * as maplibregl from "https://unpkg.com/maplibre-gl@6.16.0/dist/maplibre-gl.mjs"
import { useEffect } from "react";
import "./create-Map.css"

const addMap = () => {
    const mapContainer = document.getElementById("main-map");

    const map = new maplibregl.Map({
        container: mapContainer,
        zoom: "15",
        center: [73.9821243, 18.5733721],
        style: "https://tiles.openfreemap.org/styles/bright"
    });
}


export default () => {
    useEffect(addMap, []);
    return (
        <div className="map-container">
            <div className="service-filter">
                <p >this is the service filter</p>
            </div>
            <div className="main-map" id="main-map">
                <div className="filters">
                    {/* <i className="fa-solid fa-layer-group services"></i> */}
                </div>
            </div>
        </div>
    );
}