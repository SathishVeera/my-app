import React, { useState } from "react";
import authapp from "./firebase";
import { useNavigate } from "react-router-dom";

const Login = (user, setUser) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        try{
            await authapp.signInWithEmailAndPassword(email,password);
            console.log(email+ ' ' + password);
            navigate('/');
            setUser(email);
        } catch(error) {
            console.log(error);
            alert(error);
        }
    }

    return(
        <div>
        <h2>Login Page:</h2>
            <form onSubmit={handleLogin}>
            <input type="email" placeholder="enter email" value={email} onChange={(event) => setEmail(event.target.value)}/>
            <input type="pasword" placeholder="enater password" value={password} onChange={(event) => setPassword(event.target.value)}/>
            <button type="submit">Login</button>
            </form>

        </div>
    )
}
export default Login