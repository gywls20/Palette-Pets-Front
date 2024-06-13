import axios from 'axios';
import jwtAxios from '../../service/jwtAxios';
import { redirect } from 'react-router-dom';

const connectChat = (e) => {
    // id 값을 해당 채팅 상대의 PK로 바꾸면 채팅 연결 완료
    jwtAxios.get(`http://localhost:8080/api/chat?id=${e}`).then((response) => {
        console.log(response);
        alert("response = " + response.data);
        alert("e :: "+ e)
        const redirectUrl = "http://175.45.200.47:3000/chat/" + response.data;
        window.location.href = redirectUrl;
    }).catch((error) => {
        console.error(error);
    });
}

export default connectChat;