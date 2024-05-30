import {Navigate} from 'react-router-dom';
import {useSelector} from "react-redux";

const IsLogin = ({ Component }) => {

    const token = useSelector(state => state.MemberSlice).token;

    console.log("checkLoginRoute", token);

    return(
        (token !== undefined) && (token !== null) && (token !== '') ? Component : <Navigate to="/login" {...alert("로그인이 필요합니다.")}></Navigate>
    )
}

export default IsLogin;