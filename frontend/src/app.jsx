import Signup from "./components/authentication/authentication_signup.jsx"
import { BrowserRouter, Routes, Route } from "react-router"
import Signin from "./components/authentication/authentication_signin.jsx"
import Home from "./components/pages/home.jsx"
import Services from "./components/pages/services.jsx"
import Emergency from "./components/pages/emergency.jsx"
import Map from "./components/pages/map.jsx"
import Notification from "./components/pages/notification.jsx"
import Layout from "./components/layout/warkari_layout.jsx"

export default () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Signup />} />
                    <Route path="/signin" element={<Signin />} />
                </Route>

                <Route path="/warkari" element={<Layout />} >
                    <Route path="/warkari" element={<Home />} ></Route>
                    <Route path="/warkari/services" element={<Services />} ></Route>
                    <Route path="/warkari/emergency" element={<Emergency />} ></Route>
                    <Route path="/warkari/map" element={<Map />} ></Route>
                    <Route path="/warkari/notification" element={<Notification />} ></Route>
                </Route>
            </Routes>
            

        </>
    );
}