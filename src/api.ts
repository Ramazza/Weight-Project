import axios from "axios";

const api = axios.create({
    /* baseURL: 'http://192.168.15.69:4000', */
    baseURL: 'https://weight-project-api.onrender.com',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
})

export default api;