import React from "react";
import { BrowserRouter, Route, Router } from "react-router-dom";

const ReactRouter = () => {
    return(
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contect">Contact</Link></li>
                </ul>
            </nav>

            <BrowserRouter>
                <Router>
                    <Route path="/" element={Home}></Route>
                    <Route path="About" element={About}></Route>
                    <Route path="Contact" element={Contact}></Route>
                </Router>
            </BrowserRouter>
        </div>
    )
}
export default ReactRouter