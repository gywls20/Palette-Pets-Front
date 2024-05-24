import React from 'react';
import { Link } from 'react-router-dom';

import LoginStyle from '../css/login.module.css'

const LoginForm = () => {
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
                                required />
                    </div>

                    <div className={LoginStyle.formGroup}>
                        <label htmlFor="password" className={LoginStyle.label}>비밀번호</label>
                        <input type="password"
                                name="pwd"
                                className={LoginStyle.input}
                                placeholder="비밀번호 입력"
                                required />
                    </div>

                    <button className={LoginStyle.submitButton}>로그인</button>
                </form>

                <div className={LoginStyle.links}>
                    <Link to="forgot-password" className={LoginStyle.link}>비밀번호를 잊으셨나요?</Link>
                    <Link to="/join" className={LoginStyle.link}>회원가입</Link>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;