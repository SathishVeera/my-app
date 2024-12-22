import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";

const Authapp = () => {
        const [user, setUser] = useState("Guest");

    return(
        <div>
            <Router>
                <Link to='/'>Home</Link> <Link to='/login'>Login</Link> <Link to='/register'>Register</Link>
                <Routes>
                    <Route path="/" element={<Home user={user} setUser={setUser}/>}></Route>
                    <Route path="/login" element={<Login user={user} setUser={setUser}/>}></Route>
                    <Route path="/register" element={<Register/>}></Route>
                    <Route path="/" element={<Navigate to='/' />}></Route>
                </Routes>
            </Router>
        </div>
    )
}
export default Authapp