import React from "react";

const Child = (props) => {
    const {title, onclick} = props;
    return(
        <div>
            {title}<br/>
            <button onClick={onclick}>Update the data</button>
        </div>
    )
}

export default Child