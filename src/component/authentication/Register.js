import React, { useState } from "react";
import authapp from "./firebase";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async () => {
        try{
            await authapp.createUserWithEmailAndPassword(email, password);
            alert("Email ID registered sucssfully, Please login");
            navigate('/Login');
        } catch(error) {
            console.log(error);
            alert(error);
        }
    }

    return(
        <div>
        <h2>Register Page:</h2>
         <form onSubmit={handleRegister}>
            <input type="email" placeholder="enter email" value={email} onChange={(event) => event.target.value}/>
            <input type="password" placeholder="enter password" value={password} onChange={(event) => event.target.value}/>
            <button type="submit">Register</button>
         </form>        
        </div>
    )
}
export default Register