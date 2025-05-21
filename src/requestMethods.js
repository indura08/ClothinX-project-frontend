import axios from "axios";

const BASE_URL = "http://localhost:5002/api/";
//const Token = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken || ""

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL : BASE_URL,
    header: {token: `Bearer ${TOKEN}` },
}); 

//log wenna bari nm blnna meke token awlk thiynwa token eke awla hadunama wada krnwa.