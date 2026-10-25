import "../warkari.css"
import { NavLink } from "react-router"

const items = [
    { to: "/warkari", icon: "fa-regular fa-house home", label: "Home", id: "home", end: true },
    { to: "/warkari/services", icon: "fa-solid fa-layer-group services", label: "Services", id: "services" },
    { to: "/warkari/emergency", icon: "fa-solid fa-phone emergency", label: "Emergence", id: "emergency" },
    { to: "/warkari/map", icon: "fa-solid fa-map-location-dot map", label: "Map", id: "map" },
    { to: "/warkari/notification", icon: "fa-regular fa-bell notifications", label: "Notifications", id: "notification" }
]

export default () => {
    return (
        <div className="bottom-navbar">
            <div className="navbar-icons">
                {items.map((items) => {
                    return (
                        <NavLink
                            key={items.to}
                            to={items.to}
                            end={items.end}
                             className={({ isActive }) => `navbar-item${isActive ? " active" : ""}`}
                        >
                            <span className="icn-label">
                                <i className={items.icon}></i><br />
                                <label htmlFor={items.id}>{items.label}</label>
                            </span>
                        </NavLink>
                    )
                })}
            </div>
        </div>
    );
}

