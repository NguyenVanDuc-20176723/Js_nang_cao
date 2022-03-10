
const axios = require("axios");

const url = '/user/';
const config = {
    baseURL: "http://127.0.0.1:8000/api",
    
};
const data = {
    name: "NguyenVanDuc",
    username: "duc.nv176723",
    password: "123456"
}

axios.post(url, data, config)
.then(response => console.log(response.data))
.catch( err => console.log(err));