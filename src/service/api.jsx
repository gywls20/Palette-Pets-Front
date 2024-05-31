// 기본적인 api들은 여기에

// const API_SERVER_HOST = `http://223.130.134.185:8080`;
import axios from "axios";
import { common } from "@mui/material/colors";
import { deleteToken } from "../store/MemberSlice.js";
import { useDispatch } from "react-redux";

const API_SERVER_HOST = `http://localhost:8080`;

const jsonHeaders = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": `http://localhost:3000`,
}

// jwt가 필요한 요청은 이 인스턴스를 사용해서 요청
const jwtAxios = axios.create({
    baseURL: API_SERVER_HOST,
    withCredentials: true,
    headers: jsonHeaders
});

axios.defaults.withCredentials = true; // withCredentials 전역 설정
axios.defaults.baseURL = API_SERVER_HOST;


// test 조회 api -> 예시용 (쓰지마세요)
export const memberTest = () => {
    return axios.get(`${API_SERVER_HOST}/member/test`, {
        headers: {
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
        username: dto.username,
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
    return axios.post(`${API_SERVER_HOST}/logout`, {}, {
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

// jwt 및 재발급 테스트용 GET 요청
export const jwtTestRequest = () => {
    return jwtAxios.get(`${API_SERVER_HOST}/api/hello`, {
        headers: {
            // "Authorization": token
        }
    })
        .then(response => response.data)
        .catch((error) => {
            console.error(error);
            return error.response.data;
        });
}


// Redux Persist를 사용하여 저장한 상태의 키 이름
const persistStateKey = "persist:root";

// 로컬 스토리지에서 저장된 상태 값을 초기화하고 삭제하는 함수
const clearPersistedState = () => {
    try {
        localStorage.removeItem(persistStateKey);
        console.log("Persisted state cleared from localStorage");
    } catch (err) {
        console.error("Failed to clear persisted state from localStorage:", err);
    }
};
// 로컬 스토리지에서 저장된 상태 값을 가져오는 함수
const getPersistedState = () => {
    try {
        const serializedState = localStorage.getItem(persistStateKey);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.error("Failed to retrieve persisted state from localStorage:", err);
        return undefined;
    }
};

// 로컬 스토리지에 상태 값을 저장하는 함수
const setPersistedState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(persistStateKey, serializedState);
        console.log("Persisted state updated in localStorage");
    } catch (err) {
        console.error("Failed to update persisted state in localStorage:", err);
    }
};

// 요청 인터셉터 추가
// todo : redux persist 에서 어세스 토큰 값 가져오는 코드 추가 + 테스트
jwtAxios.interceptors.request.use(
    (config) => {
        // redux persist 에 MemberSlice - token 값 가져오기
        let persistedState = getPersistedState();
        let token = JSON.parse(persistedState.MemberSlice).token;
        console.log(token);
        if (token) {
            config.headers["Authorization"] = token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 응답 인터셉터 - 리프레시 토큰 재발급 판단
jwtAxios.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;
        console.error("originalRequest = " + originalRequest);
        console.error("error data = " + error.response.data);
        if (error.response.data === "access token expired" && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const response = await axios.post(`${API_SERVER_HOST}/reissue`);
                const newAccessToken = response.headers.authorization;
                // 저장된 상태 값 가져오기
                let persistedState = getPersistedState();
                // 상태 값 초기화
                if (!persistedState) {
                    persistedState = {};
                }
                // 특정 값 변경
                persistedState.MemberSlice = {
                    token: newAccessToken,
                };
                // 변경된 상태 값 저장
                setPersistedState(persistedState);

                // 원래 요청 헤더에 새로운 어세스 토큰 넣기
                originalRequest.headers["Authorization"] = newAccessToken;
                // 새로운 어세스 토큰으로 원래 요청 다시 시도
                return jwtAxios(originalRequest);
            } catch (refreshError) {
                console.error("Failed to refresh token:", refreshError);
                console.error("재로그인 해주세요");
                // local storage 의 redux persist 값 모두 삭제 -> 만료된 어세스 토큰 삭제
                clearPersistedState();
                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error);
    }
);