import axios from "axios";

const api = axios.create({
    baseURL: "https://api-service.albarakametal.com/",
    headers: {
        "Content-Type": "application/json",
    }
});

export default api;