import React, { useEffect, useState } from "react";

const TimerComponent = ({duration}) => {
    const [time, setTime] = useState(duration);

    useEffect(() => {
        setTimeout(() => {
            setTime(time + 1)   
        }, 1000);
    }, [time])

    return(
        <div>
            <button>{time}</button>
        </div>
    )
}
export default TimerComponent

// https://www.youtube.com/watch?v=7CQdoqP5qj0