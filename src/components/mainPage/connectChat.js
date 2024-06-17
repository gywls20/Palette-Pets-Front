import jwtAxios from '../../service/jwtAxios';
import {url} from '../../utils/single';

const connectChat = (e) => {
    // id 값을 해당 채팅 상대의 PK로 바꾸면 채팅 연결 완료
    jwtAxios.get(`${url}/api/chat?id=${e}`).then((response) => {
        console.log(response);
        const redirectUrl = "http://localhost:3000/chat/" + response.data.roomId +'-'+response.data.userId;
        alert(redirectUrl);
        window.location.href = redirectUrl;
    }).catch((error) => {
        console.error(error);
    });
}

export default connectChat;