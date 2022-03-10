
const axios = require("axios");

const url = '/user';
const config = {
    baseURL: "http://127.0.0.1:8000/api",
    params: {
        username: "duc1235"
    }
};

axios.get(url, config)
.then(response => console.log(response.data))
.catch( err => console.log(err));