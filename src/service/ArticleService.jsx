import { Article } from "@mui/icons-material";
import axios from "axios";
import jwtAxios from "./jwtAxios";


const ARTICLE_API_BASE_URL = "http://localhost:8080/article/list";

//글 쓰기
const API_SERVER_HOST = "http://localhost:8080";
export const writeArticle = (formData) => {
    return jwtAxios.post(`${API_SERVER_HOST}/Post/article`, formData, {
        headers: {
            "Access-Control-Allow-Origin": `http://localhost:3000`,
            'Content-Type': 'multipart/form-data'
        }
    }
    )
        .then(response => console.log(response.data))
        .catch(error => console.log(error.data))
}


class ArticleService {
    getArticleList(page, sort, dir, personName) {
        //return axios.get(ARTICLE_API_BASE_URL);
        return axios.get(`${ARTICLE_API_BASE_URL}?page=${page}&sort=${sort}&dir=${dir}&where=${personName}`)
    }
}

export default new ArticleService();