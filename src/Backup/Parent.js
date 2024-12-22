import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
    const [name, setName] = useState('React new');
    const clickBtn = () => {
        setName("React Updated");
    }

    return(
        <div>
        <Child title={name} onclick={clickBtn}></Child><br/>
        </div>
    )
}

export default Parent