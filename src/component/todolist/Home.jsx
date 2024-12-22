import React, { useReducer } from "react";
import { useSelector } from "react-redux";

const Home = () => {
    // const users = useSelector((state) => users.state);
    // console.log(users);

    return(
        <div className="container">
            <h2>Curd App with JSON Server</h2>
            <button className="btn btn-success my-3">Create +</button>
            <table className="table">
                <thead>
                <tr>
                    <td>ID: </td>
                    <td>Name: </td>
                    <td>Email: </td>
                    <td>Action: </td>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Home