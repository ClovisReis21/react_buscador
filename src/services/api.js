import axios from "axios";

// "04561000/json"

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;