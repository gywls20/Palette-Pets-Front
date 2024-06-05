import axios from "axios";
import jwtAxios from "./jwtAxios.js";

const API_SERVER_HOST = `http://localhost:8080`;

const jsonHeaders = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": `http://localhost:3000`,
}

axios.defaults.withCredentials = true; // withCredentials 전역 설정
axios.defaults.baseURL = API_SERVER_HOST;