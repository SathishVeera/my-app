import React, { useMemo, useState } from "react";

const UseMemo = () => {

    const [count, setCount] = useState(0)

    // An Expensive calculation
    const expensiveCalculation = (num) => {
        for(let i=0; i < 1000000000; i++) {} //simulate a heavy task
        return num * 2
    }

    // Memoized the result of the expensive calculation
    const memoizedValue = useMemo(() => {
        return expensiveCalculation(count)
    }, [count])

    return(
        <div>
            <p>Count: {count}</p>
            <p>Memoized Value: {memoizedValue}</p>
            <button onClick={() => setCount(count + 1)}>Increament Count</button>
        </div>
    )
}
export default UseMemo
// useMemo Syntax:
// const menu = useMemo(callbackFunction, dependencies)
