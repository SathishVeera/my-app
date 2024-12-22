import { useContext } from "react";
import { counterContext } from "./Context";

const Bcomponent = () => {
    const counter = useContext(counterContext) 
    return(
        <div>
            {counter}
        </div>
    )
}
export default Bcomponent

// What i am doing is to pass a value to a component