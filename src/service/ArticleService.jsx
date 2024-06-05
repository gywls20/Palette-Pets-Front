import { Article } from "@mui/icons-material";
import axios from "axios";

const ARTICLE_API_BASE_URL = "http://localhost:8080/article/list";
const ARTICLE_API_BASE_URL2 = "http://localhost:8080/article/listTest";


class ArticleService {
   getArticleList(page, sort, dir, search) {
        //return axios.get(ARTICLE_API_BASE_URL);
        return axios.get(`${ARTICLE_API_BASE_URL}?page=${page}&sort=${sort}&dir=${dir}&where=${search}`)
        //return axios.get(`${ARTICLE_API_BASE_URL2}?articleTags=${where}`)
    }
}

export default new ArticleService();