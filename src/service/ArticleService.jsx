import { Article } from "@mui/icons-material";
import axios from "axios";

const ARTICLE_API_BASE_URL = "http://localhost:8080/article/list";

class ArticleService {
   getArticleList(page, sort, dir, personName) {
        console.log("serivce = " + personName);
        //return axios.get(ARTICLE_API_BASE_URL);
        return axios.get(`${ARTICLE_API_BASE_URL}?page=${page}&sort=${sort}&dir=${dir}&where=${personName}`)
    }
}

export default new ArticleService();