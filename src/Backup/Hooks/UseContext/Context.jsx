import { createContext } from "react";

export const counterContext = createContext(0) //Initial state

const Context = () => {
    return(
        <div>
            Context Component
        </div>
    )
}
export default Context

// In this we define that state which may need to be use in many Components