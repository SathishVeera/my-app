import React, { useCallback, useState } from "react";

const UseCallback = () => {
//Child Component - Create and add below code
const ChildComponent = React.memo(({onIncreament}) => {
    console.log('Child component rendered');
    return <button onClick={onIncreament}>Increament</button>
})
    
//Parent Component
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    //useCallback to memoized the increment function
    const increment = useCallback(() => {
        setCount(prevCount => prevCount + 1)
    }, []) // Empty dependency array means the function won't change 

    return(
        <div>
            <p>Count: {count}</p>
            <ChildComponent onIncreament={increment}/>
            <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Type here"/>
        </div>
    )
}
export default UseCallback

// useCallback Syntax:
/* const memoizedCallback = useCallback(() => {
    Your Callback logix here
}, [dependency1, dependency2, ...]) */
// Dependencies ---> Array of dependencies that the callback depends on