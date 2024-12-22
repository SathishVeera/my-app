    //GET 
    async function getDatabase() {
        try{
            const response = await axios.get('https://api.example.com/data')
            // We can access the data using response.data
            console.log(response.data);
        } catch(error) {
            console.error("Error in GET request", error);
        }
    }

    //POST
    async function postData() {
        try{
            const response = await axios.post('https://api.example.com/data',
                 {
                    key1: 'value1',
                    key2: 'value2'
                 })
                 console.log(response.data);
        } catch(error) {
            console.error("Error in POST request", error);
        }
    }

    //DELETE
    async function deleteData() {
        try{
            const response = await axios.delete('https://api.example.com/data')
            console.log(response.data);
        } catch(error) {
            console.error("Error in DELETE request", error);
        }
    }
