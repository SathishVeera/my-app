import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
//Storing mutable values.
    let ref = useRef(0);
    const [but, setBut] = useState(0)

    const RefButton = () => {
        ref.current = ref.current + 1;
        console.log('Ref Value: ' + ref.current)
    }

    const StateButton = () => {
        console.log('rendered');
        setBut((prev) => prev + 1);
    }

//Refencing DOM elements.
    const buttonRef = useRef(null)
    useEffect(() => {
        if(buttonRef.current) {
            buttonRef.current.style.backgroundColor = 'purple'
        }
    }, [])

    return(
        <div>
{/* Storing mutable values. */}
            <button onClick={StateButton}>State Button</button>
            <button onClick={RefButton}>Ref Button</button>

{/* Refencing DOM elements. */}
            <button ref={buttonRef}>Ref Button</button>
        </div>
    )
}
export default UseRef
// The useRef Hook in React allows to update the DOM directly without re-rendering the component.
