import axios from "axios"

const api = axios.create({
    baseURL: "/api/",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
});

export default api;

