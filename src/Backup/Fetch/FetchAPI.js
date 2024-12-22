// Using Axios
function fetchAxios() {
    return axios.get(apiUrl)
     .then(response => {
        return response.data;
     })
     .catch(error => {
        throw error
     });
}

//Using Async/Await
async function fetchAsyncAwait() {
    try{
        const data = await fetch(apiUrl)
        const response = await data.json()
        return response;
    } catch(error) {
        throw error
    }
}

// Using Promises
function fetchPromises() {
    fetch(apiUrl)
     .then((response) => {
        return response.json()
     })
     .then((data) => {
        console.log(data);
     })
}