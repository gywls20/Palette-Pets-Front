import { Article } from "@mui/icons-material";
import axios from "axios";

//const ARTICLE_API_BASE_URL = "http://localhost:8080/article/test";

const ARTICLE_API_BASE_URL = "http://localhost:8080/api/test/querydsl";

class ArticleService {
    getArticleList(page, sort, asc) {
        //return axios.get(ARTICLE_API_BASE_URL);
        return axios.get(`${ARTICLE_API_BASE_URL}?page=${page}&sort=${sort}&asc=${asc}`)
    }

}
export default new ArticleService();