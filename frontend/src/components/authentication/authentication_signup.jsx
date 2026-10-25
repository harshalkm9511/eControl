import axios from "axios"
import { useNavigate } from "react-router"
import "../layout/warkari.css"
import "./authentication.css"

const signup = () => {
    const navigate = useNavigate();
    const submitSignup = async (event) => {
        event.preventDefault();
        const result = await axios.post("http://localhost:3000/api/auth/signup",
            {
                email: event.target[0].value,
                phone: event.target[1].value,
                name: event.target[2].value,
                password: event.target[3].value,
                service_role: event.target[4].value
            }
        );
        if (result.data.role === "warkari") {
            navigate("/warkari");
        }
    }

    const login = () => {
        navigate("/signin");
    }

    return (
        <div className="form-container">
            <form onSubmit={submitSignup}>
                
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" />
                <label htmlFor="phone">Mobile no. </label>
                <input type="number" name="phone" id="phone" />
                <label htmlFor="name">Full Name: </label>
                <input type="text" name="name" id="name" />
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" />
                <label htmlFor="service_role">What's your role ?</label>
                <select name="service_role" id="service_role">
                    <option value="temple">&nbsp;&nbsp;Temple</option>
                    <option value="police">&nbsp;&nbsp;Police</option>
                    <option value="medical">&nbsp;&nbsp;Medical</option>
                    <option value="water">&nbsp;&nbsp;Water</option>
                    <option value="food">&nbsp;&nbsp;Food</option>
                    <option value="sanitation">&nbsp;&nbsp;Sanitation</option>
                    <option value="accomudation">&nbsp;&nbsp;Accomudation</option>
                    <option value="volunteer">&nbsp;&nbsp;Volunteer</option>
                    <option value="warkari">&nbsp;&nbsp;Warkari</option>
                </select>

                <button type="submit">Register</button>
                <button type="button" onClick={login}>Login</button>
            </form>
        </div>
    );
}

export default signup;