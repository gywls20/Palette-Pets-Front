import { Link, useNavigate, useLocation } from 'react-router-dom';
import LoginStyle from '../../styles/loginPage/login.module.css';
import { login } from "../../service/api.jsx";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { saveToken } from "../../store/MemberSlice.js";
import {url} from '../../utils/single.js';
import Swal from 'sweetalert2';

const LoginFormComp = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // URL에 error=true가 있는지 확인
        const queryParams = new URLSearchParams(location.search);
        if (queryParams.get('error') === 'true') {
            Swal.fire({
                title: '로그인 실패',
                text: '다른 로그인 방법을 시도해 주세요.^^',
                icon: 'warning'
            });
        }
    }, [location]);

    const requestLogin = async (e) => {
        e.preventDefault();
        try {
            const token = await login({ username, password });
            if (token === false) {
                Swal.fire({
                    title: '로그인 실패',
                    text: '다른 로그인 방법을 시도해 주세요.^^',
                    icon: 'warning'
                });
                // window.location.reload();
            } else {
                console.log('로그인 성공');
                Swal.fire({
                    title: '로그인 성공',
                    text: '환영합니다.^^',
                    icon: 'success'
                });
                dispatch(saveToken(token));
                navigate({ pathname: '/' }, { replace: true });
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                alert(error.response.data.message);
            } else {
                alert('An unexpected error occurred.');
            }
        }
    };

    return (
        <div>
            <div className={LoginStyle.body}>
                <form className={LoginStyle.form}>
                    <div className={LoginStyle.formGroup}>
                        <label htmlFor="email" className={LoginStyle.label}>이메일</label>
                        <input type="email"
                            name="email"
                            className={LoginStyle.input}
                            placeholder="이메일 입력"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required />
                    </div>

                    <div className={LoginStyle.formGroup}>
                        <label htmlFor="password" className={LoginStyle.label}>비밀번호</label>
                        <input type="password"
                            name="pwd"
                            className={LoginStyle.input}
                            placeholder="비밀번호 입력"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required />
                    </div>

                    <button className={LoginStyle.submitButton}
                        onClick={requestLogin}
                    >로그인</button>
                </form>

                <div className={LoginStyle.links}>
                    <Link to="forgot-password" className={LoginStyle.link}>비밀번호를 잊으셨나요?</Link>
                    <Link to="/join" className={LoginStyle.link}>회원가입</Link>
                    <Link to={`${url}/oauth2/authorization/naver`} className={LoginStyle.link}>
                        <img src='https://clova-phinf.pstatic.net/MjAxODAzMjlfOTIg/MDAxNTIyMjg3MzM3OTAy.WkiZikYhauL1hnpLWmCUBJvKjr6xnkmzP99rZPFXVwgg.mNH66A47eL0Mf8G34mPlwBFKP0nZBf2ZJn5D4Rvs8Vwg.PNG/image.png'className={LoginStyle.naverImg}/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LoginFormComp;
