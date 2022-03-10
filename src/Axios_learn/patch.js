
const axios = require("axios");

const url = '/user/10/';
const config = {
    baseURL: "http://127.0.0.1:8000/api",
    
};
const data = {
    name: "NguyenVanDuc"
}

axios.patch(url, data, config)
.then(response => console.log(response.data))
.catch( err => console.log(err));