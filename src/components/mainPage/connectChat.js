import axios from 'axios';
import jwtAxios from '../../service/jwtAxios';
import { redirect } from 'react-router-dom';

const connectChat = () => {
    jwtAxios.get('http://localhost:8080/api/connect').then((response) => {
        console.log(response);
        const redirectUrl = response.data;
        window.location.href = redirectUrl;
    }).catch((error) => {
        console.error(error);
    });
}

export default connectChat;