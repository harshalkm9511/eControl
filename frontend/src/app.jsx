import Signup from "./components/authentication_signup.jsx"
import { BrowserRouter, Routes, Route } from "react-router"
import Signin from "./components/authentication_signin.jsx"
import Warkari from "./components/warkari.jsx"

export default () => {
    return (
        <>
            <Routes>
                <Route  path="/" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />
                <Route  path="/warkari" element={<Warkari />} />
            </Routes>
            
        </>

    );
}