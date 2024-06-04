import { Article } from "@mui/icons-material";
import axios from "axios";

const ARTICLE_API_BASE_URL = "http://localhost:8080/article/list";

class ArticleService {
    getArticleList(page, sort, dir, where) {
        console.log("dir 호출 : ", dir);
        //return axios.get(ARTICLE_API_BASE_URL);
        return axios.get(`${ARTICLE_API_BASE_URL}?page=${page}&sort=${sort}&dir=${dir}&where=${where}`)
    }
}

export default new ArticleService();