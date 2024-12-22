import React, { useCallback, useMemo, useState } from "react";
import StateComponent from "./StateComponent";

const NewComponent = () => {
    const [count, setCount] = useState(0);
    const incremanet = () => {
        setCount(count + 5);
    }

    const [inputValue, setInputValue] = useState('Test');
    const onchanges = (event) => {
        const newInput = event.target.value;
        setInputValue(newInput);
    }
// High Order Component
    const applyComponent = (StateComponent) => {
        return(props) => {
            return(
                <div>
                    <StateComponent {...props}></StateComponent>
                </div>
            )
        }
    }

    const ModifyapplyComponent = applyComponent(StateComponent);

// UseMemo and useCallback    
    // const memo = useMemo(() => {
    //     return a;
    // }, [a])

    // const callback = useCallback((name) => {
    //     return data = name;
    // }, [data]);

    return(
        <div>
            {/* {memo} | {callback} */}
            {count} <button onClick={incremanet}> Add the items</button>
            <br/>
            {inputValue} <input onChange={onchanges} placeholder="To be fill"></input>
            <ModifyapplyComponent></ModifyapplyComponent>
        </div>
    )
}
export default NewComponent