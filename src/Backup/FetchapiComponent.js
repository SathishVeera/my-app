import React, { useEffect } from "react";

const FetchapiComponent = () => {

    const fecthApiResponse = async () => {
        let urlData = '';
        urlData = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=5');
        const resData = await urlData.json();
        console.log("Print", resData);
    }

    useEffect(() => {
        fecthApiResponse();
    })

    return(
        <div>
            FetchapiComponent
        </div>
    )
}

export default FetchapiComponent