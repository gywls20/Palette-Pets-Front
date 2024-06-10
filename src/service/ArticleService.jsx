import { Article } from "@mui/icons-material";
import axios from "axios";
import jwtAxios from "./jwtAxios.js";


const ARTICLE_API_BASE_URL = "http://localhost:8080/article/list";
const ARTICLE_API_BASE_URL2 = "http://localhost:8080/article/listTest";


//글 쓰기
const API_SERVER_HOST = "http://localhost:8080";
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

//글 하나만 가져오기 
export const getUpdateArticle =(articleId) =>{
    return axios.get(`${API_SERVER_HOST}/articles/${articleId}`)
                .then(response => response.data.result.data)
                .catch(error => error.data)
}

//글 업데이트
export const updateArticle = (formData,articleId)=> {
    return jwtAxios.post(`${API_SERVER_HOST}/Patch/${articleId}`,formData,{
        headers: {
            "Access-Control-Allow-Origin": `http://localhost:3000`,
            'Content-Type': 'multipart/form-data'
        }
    })
        .then(response=> console.log(response.data))
        .catch(error => console.log(error.data))
}



class ArticleService {
    getArticleList(page, sort, dir, search) {
        //return axios.get(ARTICLE_API_BASE_URL);
        return axios.get(`${ARTICLE_API_BASE_URL}?page=${page}&sort=${sort}&dir=${dir}&where=${search}`)
        //return axios.get(`${ARTICLE_API_BASE_URL2}?articleTags=${where}`)
    }
}

export default new ArticleService();