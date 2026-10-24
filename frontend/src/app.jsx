import Signup from "./components/authentication/authentication_signup.jsx"
import { BrowserRouter, Routes, Route } from "react-router"
import Signin from "./components/authentication/authentication_signin.jsx"
import Warkari from "./components/warkari/layout/warkari.jsx"
import Home from "./components/warkari/pages/home.jsx"
import Services from "./components/warkari/pages/services.jsx"
import Emergency from "./components/warkari/pages/emergency.jsx"
import Map from "./components/warkari/pages/map.jsx"
import Notification from "./components/warkari/pages/notification.jsx"

export default () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />

                <Route path="/warkari" element={<Warkari />} >
                    <Route path="/warkari/home" element={<Home />} ></Route>
                    <Route path="/warkari/services" element={<Services />} ></Route>
                    <Route path="/warkari/emergency" element={<Emergency />} ></Route>
                    <Route path="/warkari/map" element={<Map />} ></Route>
                    <Route path="/warkari/notification" element={<Notification />} ></Route>
                </Route>
            </Routes>

        </>
    );
}