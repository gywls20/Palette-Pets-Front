import axios from "axios";
import jwtAxios from "./jwtAxios";

const API_SERVER_HOST= "http://localhost:8080";

export const addComment = (dto) => {
    return jwtAxios.post(`${API_SERVER_HOST}/Post/comments`, dto)
        .then(response => console.log(response.data))
        .catch(error => console.log(error.data))
}