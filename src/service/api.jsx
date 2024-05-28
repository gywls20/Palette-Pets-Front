// 기본적인 api들은 여기에

// const API_SERVER_HOST = `http://223.130.134.185:8080`;
import axios from "axios";

const API_SERVER_HOST = `http://localhost:8080`;

axios.defaults.withCredentials = true; // withCredentials 전역 설정
axios.defaults.baseURL = API_SERVER_HOST;

const defaultHeaders = {
    "Content-Type": "application/x-www-form-urlencoded",
    "Access-Control-Allow-Origin": `http://localhost:3000`,
}

const jsonHeaders = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": `http://localhost:3000`,
}

// test 조회 api -> 예시용 (쓰지마세요)
export const memberTest = () => {
    return axios.get(`${API_SERVER_HOST}/member/test`, {
        headers : {
            jsonHeaders
        }
    })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error(error);
            return error.response.data;
        });
}

// login 로직
export const login = (dto) => {
    return axios.post(`${API_SERVER_HOST}/login`, {
        username : dto.username,
        password: dto.password,
    }, {
        headers: jsonHeaders
    })
        .then((response) => {
            const token = response.headers.authorization;
            return token;
        })
        .catch((error) => {
            console.error(error);
            console.error(error.response.data);
            return error.response.data;
        });
}

// logout post 요청
export const logout = () => {
    return axios.post(`${API_SERVER_HOST}/logout`,{},{
        headers: jsonHeaders
    })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error(error);
            console.error(error.response.data);
            return error.response.data;
        });
}