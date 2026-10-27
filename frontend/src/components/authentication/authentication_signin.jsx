import axios from "axios"
import {useNavigate} from "react-router"
import "../layout/warkari.css"
import "./authentication.css"

const signin = () => {
    const navigate = useNavigate();

    const submitLogin = async (event) => {
        event.preventDefault();
        const result = await axios.post("http://localhost:3000/api/auth/signin",
            {
                email: event.target[0].value,
                password: event.target[1].value,
            }
        );
        if(result.data.role ==="warkari"){
            navigate("/warkari");
        }
    }

     const register = ()=>{
        navigate("/");
    }

    return (
        <div className="form-container">
            <form onSubmit={submitLogin}>
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" placeholder="   example@gmail.com" />
                <label htmlFor="password">password: </label>
                <input type="password" name="password" id="password" placeholder="    &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull;"/>
                <button type="submit">Login</button>
                <button type="button" onClick={register}>Register</button>
            </form>
        </div>
    )
}

export default signin;