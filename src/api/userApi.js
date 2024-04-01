import axios from "axios";

const userApi = axios.create({
    baseURL: "https://v8mnfh1qh1.execute-api.us-east-2.amazonaws.com/dev/trading/",
    headers: {
        "Content-Type": "application/json",
    },
});

const setAuthHeader = () => {
    const token = localStorage.getItem("token");
    if (token) {
        userApi.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(token)}`;
    } else {
        delete userApi.defaults.headers.common["Authorization"];
    }
};

// Registering the user
export function RegisterUser(body) {
    // return userApi.post('/', body)
}


// Login the user
export function Login(body) {
    // return userApi.post('/login', body)
}

// more functions if needed


export default userApi;