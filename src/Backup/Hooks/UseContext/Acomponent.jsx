import { useState } from "react";
import { counterContext } from "./Context";
import Bcomponent from "./Bcomponent";

const Acomponent = () => {
    
    const [count] = useState(25)

    return(
        <>
        <counterContext.Provider value={count}>
            <Bcomponent/>
        </counterContext.Provider>
        </>
    )
}
export default Acomponent