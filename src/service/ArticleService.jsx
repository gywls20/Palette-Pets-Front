import { Article } from "@mui/icons-material";
import axios from "axios";
import jwtAxios from "./jwtAxios.js";
import {url} from "../utils/single.js";

const ARTICLE_API_BASE_URL = `${url}/article/list`;
//글 쓰기
const API_SERVER_HOST = url;

export const writeArticle = (formData) => {
    return jwtAxios.post(`${API_SERVER_HOST}/Post/article`, formData, {
        headers: {
            "Content-Type": 'multipart/form-data'
        }
    }
    )
        .then(response => response.data)
        .catch(error => error.data)
}

//글 조회 단건
export const getArticleView =(articleId) =>{
    return axios.get(`${API_SERVER_HOST}/articles/${articleId}`)
                .then(response => response.data.result.data)
                .catch(error => error.data)
}

//글 수정 조회
export const getUpdateArticle =(articleId) =>{
    return jwtAxios.get(`${API_SERVER_HOST}/article/getUpdateArticle/${articleId}`)
                .then(response => response.data.result.data)
                .catch(error => error.data)
}

//글 수정
export const resistUpdateArticle = (formData,articleId)=> {
    return jwtAxios.put(`${API_SERVER_HOST}/articles/update/${articleId}`,formData,{
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
        .then(response=> console.log(response.data))
        .catch(error => console.log(error.data))
}
//글 좋아요
export const increaseLikeCount = (body) =>{
    return jwtAxios.post(`${API_SERVER_HOST}/like`,body)
    .then(response => response.data)
    .catch(response => console.log(response.data))
}

class ArticleService {
    getArticleList(page, sort, dir, search,boardName) {
        //return axios.get(ARTICLE_API_BASE_URL);
        return axios.get(`${ARTICLE_API_BASE_URL}?page=${page}&sort=${sort}&dir=${dir}&where=${search}&boardName=${boardName}`)
        //return axios.get(`${ARTICLE_API_BASE_URL2}?articleTags=${where}`)
    }
}

export default new ArticleService();