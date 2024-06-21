import { Article } from "@mui/icons-material";
import axios from "axios";
import jwtAxios from "./jwtAxios.js";
import {url} from "../utils/single.js";

const API_SERVER_HOST = url;

export const getReportMember = () =>{
  return  jwtAxios.get(`${API_SERVER_HOST}/report/getMemberId`)
    .then(response => response.data)
    .catch(response => response.data)

}

export const reportAddRequest = (memberId,selected,reportedId,content,articleId)=>{

    const requestDto = {
        memberId : memberId,
        articleId : articleId,
        memberNickname : reportedId,
        reportReason : selected,
        reportContent : content
    }
    
    return axios.post(`${API_SERVER_HOST}/report/addReport`,requestDto)
    .then(response => response.data)
    .catch(response => console.log(response.data))
}
