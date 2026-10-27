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
                <input type="email" name="email" id="email" placeholder="example@gmail.com" />
                <label htmlFor="phone">Mobile no. </label>
                <input type="number" name="phone" id="phone" placeholder="+ 951 1989 314" />
                <label htmlFor="name">Full Name: </label>
                <input type="text" name="name" id="name" placeholder="Alice" />
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" placeholder="&bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull;"/>
                <label htmlFor="service_role">What's your role ?</label>
                <select name="service_role" id="service_role">
                    <option value="temple">Temple</option>
                    <option value="police">Police</option>
                    <option value="medical">Medical</option>
                    <option value="water">Water</option>
                    <option value="food">Food</option>
                    <option value="sanitation">Sanitation</option>
                    <option value="accomudation">Accomudation</option>
                    <option value="volunteer">Volunteer</option>
                    <option value="warkari">Warkari</option>
                </select>

                <button type="submit">Register</button>
                <button type="button" onClick={login}>Login</button>
            </form>
        </div>
    );
}

export default signup;