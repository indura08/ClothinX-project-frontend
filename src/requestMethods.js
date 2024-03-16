import axios from "axios";

const BASE_URL = "http://localhost:5002/api/";
const Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjMwNjYzNmFmZjA2NGQ1NzY1YzU4YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMDU5OTg5MCwiZXhwIjoxNzEwODU5MDkwfQ.8EGsmPodyeAzO34RNlH7unM2dPPQ9pgXZHCr1Jd4if0"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL : BASE_URL,
    header: {token: `Bearer ${Token}` },
});