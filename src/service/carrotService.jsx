import axios from "axios";
import jwtAxios from "./jwtAxios";

const CARROT_API_BASE_URL = "http://localhost:8080/carrot";

//글 작성
// export const writeCarrot = (formData) => {
//     return jwtAxios.post(`${CARROT_API_BASE_URL}/post`, formData, {
//     headers: {
//         "Content-Type": 'multipart/form-data'
//     }
// }
// )
//     .then(response => response.data)
//     .catch(error => error.data)
// }


class carrotService {
    //리스트 출력
    getCarrotList(page, sort, dir, where) {
        //return axios.get(ARTICLE_API_BASE_URL);
        return axios.get(`${CARROT_API_BASE_URL}/list?page=${page}&sort=${sort}&dir=${dir}&where=${where}`)
        //return axios.get(`${ARTICLE_API_BASE_URL2}?articleTags=${where}`)
    }

    //글 작성
    postCarrotWrite(formData) {
        console.log("폼데이터 = ", Object.fromEntries(formData.entries()));
        return jwtAxios.post(`${CARROT_API_BASE_URL}/post`, formData, {
        headers: {
            "Content-Type": 'multipart/form-data'
        }
    }
    )
        .then(response => response.data)
        .catch(error => error.data)
    }

    //검색 기능
    getSearchList(keyword) {
        return jwtAxios.get(`${CARROT_API_BASE_URL}/search?keyword=${keyword}`)
    }

    //상세 정보
    getCarrotDetails(carrotId) {
        return jwtAxios.get(`${CARROT_API_BASE_URL}/list/${carrotId}`)
    }

}

export default new carrotService();