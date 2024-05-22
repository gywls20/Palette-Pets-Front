import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

import LoginStyle from '../css/login.module.css';
import LoginImg from '../image/login.jpg';
import axios from 'axios';


const Login = () => {
    const navigate = useNavigate() 
    const [userDTO, setUserDTO] = useState({
        email: '',
        pwd: ''
    })
    
    const {name, nickName, email, pwd} =userDTO;
    
    const [emailDiv, setEmailDiv] = useState('');
    const [pwdDiv, setPwdDiv] = useState('');
    
    const onInput = (e) => {
        const {name, value} = e.target
        setUserDTO({
            ...userDTO,
            [name]: value
        })
    }
    
    const isEmailValid = (email) => {
        const emailPattern = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
        return emailPattern.test(email)
    }
    
    const findByEmail = () => {
        if(!email) return
        if(!isEmailValid(email)){
            setEmailDiv('유효하지 않은 이메일 형식')
            return
        }
        axios.get(`http://localhost:8080/user/findByEmail?email=${email}`)
        .then(res => setEmailDiv(!res.data ? '' : '다시 입력하세요'))
        .catch(error => console.log(error))
    }
    
    const findByPwd = () => {
        if(!pwd) return
        axios.get(`http://localhost:8080/user/findByPwd?pwd=${pwd}`)
        .then(res => setEmailDiv(res.data ? '' : '다시 입력하세요'))
        .catch(error => console.log(error))
    }
    
    const onLoginSubmit = (e) => {
        e.preventDefault()
        
        setEmailDiv('')
        setPwdDiv('')
        
        if(!email) {
            setEmailDiv('이메일 입력')
            return
        }
        if(!pwd){
            setPwdDiv('비밀번호 입력')
            return
        }
        
        axios.post('http://localhost:8080/user/login', {email, pwd})
        .then(res => {
            if(res.data.success) {
                navigate(`/main?${email}`)
            }else{
                setLoginError('이메일 또는 비밀번호가 잘못되었습니다')
            }
        })

    }

    return (
        <div className={LoginStyle.container}>
            <header className={LoginStyle.header}>
                <span className={LoginStyle.title}>냥가왈부</span>
                <div className={LoginStyle.icons}>
                    <button className={LoginStyle.iconButton}>
                        <Link to='/'>
                            <FontAwesomeIcon icon={faHouse}/>
                        </Link>
                    </button>
                </div>
            </header>

            <body className={LoginStyle.boyd}>
                <div className={LoginStyle.imageContainer}>
                    <img src={LoginImg} alt="Login" className={LoginStyle.image} />
                </div>

                <div className={LoginStyle.body}>
                    <form className={LoginStyle.form}>
                        <div className={LoginStyle.formGroup}>
                            <label htmlFor="email" className={LoginStyle.label}>이메일</label>
                            <input type="email"
                                   name="email"
                                   value={email}
                                   className={LoginStyle.input}
                                   onChange={onInput}
                                   onBlur={findByEmail}
                                   placeholder="이메일 입력"
                                   required />
                        </div>
                        {emailDiv && <div className={Login.error} style={{ color: emailDiv === '사용 가능' ? 'blue' : 'red' || emailDiv === '유효하지 않은 이메일 형식'}}>{emailDiv}</div>}

                        <div className={LoginStyle.formGroup}>
                            <label htmlFor="password" className={LoginStyle.label}>비밀번호</label>
                            <input type="password"
                                   name="pwd"
                                   value={pwd}
                                   className={LoginStyle.input}
                                   onChange={onInput}
                                   onBlur={findByPwd}
                                   placeholder="비밀번호 입력"
                                   required />
                        </div>
                        {pwdDiv && <div className={Login.error}>{pwdDiv}</div>}

                        <button className={LoginStyle.submitButton} onClick={onLoginSubmit}>로그인</button>
                    </form>
                    <div className={LoginStyle.links}>
                        <Link to="/forgot-password" className={LoginStyle.link}>비밀번호를 잊으셨나요?</Link>
                        <Link to="/user/join" className={LoginStyle.link}>회원가입</Link>
                    </div>
                </div>
            </body>
        </div>
    );
};

export default Login;