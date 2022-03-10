
const axios = require("axios");

const url = '/user/11/';
const config = {
    baseURL: "http://127.0.0.1:8000/api",
    
};

axios.delete(url, config)
.then(response => console.log(response.data))
.catch( err => console.log(err));