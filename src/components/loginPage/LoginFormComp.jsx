import {Link, useNavigate} from 'react-router-dom';
import LoginStyle from '../../styles/loginPage/login.module.css'
import {login} from "../../service/api.jsx";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {saveToken} from "../../store/MemberSlice.js";
import Swal from 'sweetalert2';

const LoginFormComp = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const requestLogin = async (e) => {
        e.preventDefault();
        console.log(username);
        console.log(password);
        const token = await login({username, password});
        console.log(token);

        if (token === false) {
            Swal.fire({
                title: '로그인 실패',
                text: '다시 입력 해주세요.^^',
                icon: 'warning'
            });
           
        } else {
            Swal.fire({
                title: '로그인 성공',
                text: '환영합니다.^^',
                icon: 'success'
            });
            console.log('로그인 성공');
            dispatch(saveToken(token));
            navigate({pathname: '/'}, {replace: true});
        }
    }

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
                    <Link to="http://localhost:8080/oauth2/authorization/naver" className={LoginStyle.link}>
                        <img src='https://clova-phinf.pstatic.net/MjAxODAzMjlfOTIg/MDAxNTIyMjg3MzM3OTAy.WkiZikYhauL1hnpLWmCUBJvKjr6xnkmzP99rZPFXVwgg.mNH66A47eL0Mf8G34mPlwBFKP0nZBf2ZJn5D4Rvs8Vwg.PNG/image.png'className={LoginStyle.naverImg}/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LoginFormComp;