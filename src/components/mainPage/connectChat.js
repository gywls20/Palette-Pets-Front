import jwtAxios from '../../service/jwtAxios';
import {url} from '../../utils/single';

const connectChat = (e) => {
    jwtAxios.get(`${url}/api/chat?id=${e}`).then((response) => {
        console.log(response);
        const encodeNickname = btoa(response.data.nickname); // 본인 닉네임
        const redirectUrl = `http://localhost:3000/chat/${response.data.roomId}-${encodeNickname}`;
        window.location.href = redirectUrl;
    }).catch((error) => {
        console.error(error);
    });
}

export default connectChat;