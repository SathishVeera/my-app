import React from "react";
import authapp from "./firebase";

const Home = (user, setUser) => {

    const handleLogout = async () => {
        try{
            await authapp.signOut();
            setUser("Guest");
        } catch(error) {
            console.log(error);
            alert(error)
        }
    }

    return(
        <div>
            <h1>Welcome to the Home page</h1>
            <h2>Hello {user}</h2>

            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}
export default Home