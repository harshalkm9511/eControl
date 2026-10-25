import "./warkari.css"
import { Outlet, useLocation } from "react-router"
import NavLogin from "./navbars/navbar.login"
import NavRegister from "./navbars/navbar.register"
import NavHome from "./navbars/navbar.home"
import BottonNav from "./navbars/navbar.botton-nav"
import NavServices from "./navbars/navbar.servies"
import NavMap from "./navbars/navbar.map"
import NavNotification from "./navbars/navbar.notification"
import NavEmergency from "./navbars/navbar.emregency"

export default () => {
    const location = useLocation();
    const currPath = location.pathname;

    const topNav = () => {
        switch (currPath) {
            case "/warkari":
                return <NavHome />;
            case "/warkari/services":
                return <NavServices/>
            case "/warkari/emergency":
                return <NavEmergency/>;
            case "/warkari/map":
                return <NavMap/>;
            case "/warkari/notification":
                return <NavNotification/>;
            case "/":
                return <NavRegister />;
            case "/signin":
                return <NavLogin />;

            default:
                return null;
        }
    };

    return (

        <div className="warkari-page">

            {topNav()}

            <div className="main">
                <div className="main-content">
                    <Outlet />
                    {currPath}
                </div>

            </div>
            {currPath === "/warkari" ||
                currPath === "/warkari/notification" ||
                currPath === "/warkari/services" ||
                currPath === "/warkari/emergency" ||
                currPath === "/warkari/map"
                ? <BottonNav /> : null}

        </div>
    );
}