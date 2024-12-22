import React, { useState } from 'react'
import TestComponent from './TestComponent';

const StateComponent = () => {

// OnClick function - Count increments
    const [count, setCount] = useState(0);
    const increments = () => {
        setCount(count + 5);
    }
// OnChange function - Updating name
    const [inputValue, setInputValue] = useState("Update here...");
    const onChanges = (event) => {
        const newInput = event.target.value;
        setInputValue(newInput);
    } 

// High Order Component
    const applyComponent = (TestComponent) => {
        return(props) => {
            return(
                <div className='bgcolor'>
                <TestComponent {...props}></TestComponent>
                </div>
            )
        }
    }
    const ModifyapplyComponent = applyComponent(TestComponent);

// List rendrring
    const [names] = useState([
        {id:1, name:'React'}, {id:2, name: 'Angular'}
    ])

    return(
        <div>
            {count} <button onClick={increments}>Add the Items</button><br/>
            {inputValue} <input onChange={onChanges} placeholder='To be fill...'></input><br/>
            <ModifyapplyComponent></ModifyapplyComponent><br/>
            {
                names.map((list, index) => (
                    <div key={index}>{list.name}</div>
                ))
            }
        </div>
    )
}
export default StateComponent