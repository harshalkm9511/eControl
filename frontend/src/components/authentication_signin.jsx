import axios from "axios"
import {useNavigate} from "react-router"

const signin = () => {
    const navigate = useNavigate();

    const submitLogin = async (event) => {
        event.preventDefault();
        console.log(event.target);
        const result = await axios.post("http://localhost:3000/api/auth/signin",
            {
                email: event.target[0].value,
                password: event.target[1].value,
            }
        );
        console.log(result);
    }

     const register = ()=>{
        navigate("/");
    }

    return (
        <div>
            <form onSubmit={submitLogin}>
                <h1>Login to eControl</h1>
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" />
                <label htmlFor="password">password: </label>
                <input type="password" name="password" id="password" />
                <button type="submit">Login</button>
                <button type="button" onClick={register}>Register</button>
            </form>
        </div>
    )
}

export default signin;