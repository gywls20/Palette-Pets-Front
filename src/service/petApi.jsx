/**
 * pet api
 * - 펫 등록
 * - 펫 수정
 * - 펫 한건 조회
 * - 펫 리스트 조회
 * + 펫 이미지 리스트 연동 등록
 * + 펫 이미지 리스트 삭제
 */

import axios from "axios";
import jwtAxios from "./jwtAxios.js";

const API_SERVER_HOST = `http://localhost:8080`;

const jsonHeaders = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": `http://localhost:3000`,
}

// new FormData() 로 파일 보낼때는 json 헤더말고 이 헤더를 쓰기
const defaultHeaders = {
    "Access-Control-Allow-Origin": `http://localhost:3000`,
}

axios.defaults.withCredentials = true; // withCredentials 전역 설정
axios.defaults.baseURL = API_SERVER_HOST;