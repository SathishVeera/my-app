import React, { useEffect, useState } from "react";

const FetchapiDisplay = () => {

    const [record, setRecord] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos?_limit=5')
        .then(responseData => responseData.json())
        .then(data => (setRecord(data)))
        .catch(error => console.log(error))
    });

    return(
        <div>
            { record.map((list, index) => (
                    <table key={index}>
                        <tr>
                            <td>{list.id}</td>
                            <td>{list.title}</td>
                        </tr>
                    </table>
                )) }
        </div>
    )
}
export default FetchapiDisplay