import axios from "axios";
import jwtAxios from "./jwtAxios.js";

const API_SERVER_HOST = `http://localhost:8080`;

const jsonHeaders = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": `http://localhost:3000`,
}

axios.defaults.withCredentials = true; // withCredentials 전역 설정
axios.defaults.baseURL = API_SERVER_HOST;

// 명소 리스트 조회
export const getAllHostSpotList = () => {
    return axios.get(`${API_SERVER_HOST}/api/hotspot/list`, {})
        .then(res =>  res.data)
        .catch(err =>  {
            console.log(err);
            return err.response.data;
        });
}

// 명소 상세보기 한 건 조회
export const getHotSpotDetail = (hotSpotId) => {
    return jwtAxios.get(`${API_SERVER_HOST}/api/hotspot/${hotSpotId}`, {})
        .then(res =>  res.data)
        .catch(err =>  {
            console.log(err);
            return err.response.data;
        });
}


// 명소 글 작성 요청

// 명소 글 수정 요청

// 명소 글 삭제 요청