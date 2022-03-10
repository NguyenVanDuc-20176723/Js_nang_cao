const axios = require("axios");

axios.defaults.baseURL = "http://127.0.0.1:8000/api";

axios.get("/user",{
    params: {
        username: "duc.nv176723"
    }
})
.then(response => {
    console.log("GET method");
    console.log(response.data);
})
.catch( err => console.log(err))
.then( () => console.log("-----------"));


const data = {
    name: "Ducnv",
    username: "duc.nv180499",
    password: "123456"
}

axios.post("/user/", data)
.then(response => {
    console.log("POST method");
    console.log(response.data)
})
.catch( err => console.log(err))
.then( () => console.log("-----------"));