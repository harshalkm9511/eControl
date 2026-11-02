import * as maplibregl from "https://unpkg.com/maplibre-gl@6.16.0/dist/maplibre-gl.mjs"
import { useEffect } from "react";
import "./create-Map.css"

const addMap = () => {
    const mapContainer = document.getElementById("main-map");

    const map = new maplibregl.Map({
        container: mapContainer,
        zoom: "15",
        center: [75.329687, 17.675803],
        style: "https://tiles.openfreemap.org/styles/bright"
    });
}


export default () => {
    useEffect(addMap, []);
    return (
        <div className="map-container">

            <div className="main-map" id="main-map">
                <div className="service-filter">
                    <button>Medical</button>
                    <button>Food</button>
                    <button>Live</button>
                    <button>Toilets</button>
                    <button>Police</button>
                    <button>Gates</button>
                </div>
                <div className="filters">
                    <i className="fa-solid fa-layer-group services"></i>
                </div>
                <div className="map-compass">
                    <i class="fa-regular fa-compass"></i>
                </div>
                <div className="map-direction"><i className="fa-solid fa-diamond-turn-right"></i></div>
            </div>
        </div>
    );
}