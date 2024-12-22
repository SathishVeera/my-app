import React, { useState } from "react";

const Todo = () => {
    const [addValue, setAddValue] = useState('');

    const [data, setData] = useState([]);
    const handleClick = () => {
        console.log(addValue);
        if(!addValue) {
            alert('Enter the value');
        } else {
            setData([...data, addValue]);
            setAddValue('');
        }
    }

    const onRemove = (index) => {
        const remove = data.filter((item, indexItem) => indexItem !==index);
        setData(remove);
    }

    return(
        <div><br/>
           <input value={addValue} onChange={(e) => setAddValue(e.target.value)} placeholder="Enter the value..."/>
           <button onClick={() => handleClick()}>Add Items</button>
           {
            data.map((list, index) => {
                return (
                    <table><tr><td>{list} | <button onClick={() => onRemove(index)}>Remove</button></td></tr></table>
                )
            })
           }
        </div>
    )
}
export default Todo