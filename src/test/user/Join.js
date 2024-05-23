import React, { useRef, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHouse, faIdBadge, faLock, faUser } from '@fortawesome/free-solid-svg-icons';

import JoinStyle from '../css/join.module.css';
import WelcomeImg from '../image/welcome.jpg';

const Join = () => {
    const nameRef = useRef();
    const navigate = useNavigate();

    const [userDTO, setUserDTO] = useState({
        name: '',
        nickName: '',
        email: '',
        pwd: '',
    });

    const { name, nickName, email, pwd } = userDTO;

    const [nameDiv, setNameDiv] = useState('');
    const [nickNameDiv, setNickNameDiv] = useState('');
    const [emailDiv, setEmailDiv] = useState('');
    const [pwdDiv, setPwdDiv] = useState('');

    const onInput = (e) => {
        const { name, value } = e.target;
        setUserDTO({
            ...userDTO,
            [name]: value,
        });
    };

    const isEmailValid = (email) => {
        // 이메일 형식 검사 정규식
        const emailPattern = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
        return emailPattern.test(email);
    };

    const findByNickName = () => {
        if (!nickName) return;
        axios.get(`http://localhost:8080/user/findByNickName?nickName=${nickName}`)
            .then(res => setNickNameDiv(res.data === 'exist' ? '사용 불가능' : '사용 가능'))
            .catch(error => console.log(error));
    };

    const findByEmail = () => {
        if (!email) return;
        if (!isEmailValid(email)) {
            setEmailDiv('유효하지 않은 이메일 형식');
            return;
        }
        axios.get(`http://localhost:8080/user/findByEmail?email=${email}`)
            .then(res => setEmailDiv(res.data === 'exist' ? '사용 불가능' : '사용 가능'))
            .catch(error => console.log(error));
    };

    const onWriteSubmit = (e) => {
        e.preventDefault();

        setNameDiv('');
        setNickNameDiv('');
        setEmailDiv('');
        setPwdDiv('');

        if (!name) {
            setNameDiv('이름 입력');
            return;
        }
        if (!nickName) {
            setNickNameDiv('닉네임 입력');
            return;
        }
        if (!email) {
            setEmailDiv('이메일 입력');
            return;
        }
        if (!pwd) {
            setPwdDiv('비밀번호 입력');
            return;
        }
        if (emailDiv === '사용 불가능') {
            setEmailDiv('중복 체크하세요');
            return;
        }
        if (nickNameDiv === '사용 불가능') {
            setNickNameDiv('중복 체크하세요');
            return;
        }

        axios.post('http://localhost:8080/user/write', null, { params: userDTO })
            .then(res => {
                alert('회원가입 완료');
                navigate('/user/login');
            })
            .catch(error => console.log(error));
    };

    const onReset = (e) => {
        e.preventDefault();
        setUserDTO({
            name: '',
            nickName: '',
            email: '',
            pwd: '',
        });
        setNameDiv('');
        setNickNameDiv('');
        setEmailDiv('');
        setPwdDiv('');
        nameRef.current.focus();
    };

    return (
        <div className={JoinStyle.container}>
            <header className={JoinStyle.header}>
                <span className={JoinStyle.title}>냥가왈부</span>
                <div className={JoinStyle.icons}>
                    <button className={JoinStyle.iconButton}>
                        <Link to='/'>
                            <FontAwesomeIcon icon={faHouse} />
                        </Link>
                    </button>
                </div>
            </header>

            <div className={JoinStyle.imageContainer}>
                <img src={WelcomeImg} alt="Welcome" className={JoinStyle.image} />
            </div>

            <div className={JoinStyle.header}>
                <span className={JoinStyle.title}>회원가입</span>
            </div>

            <div className={JoinStyle.body}>
                <form className={JoinStyle.form} onSubmit={onWriteSubmit}>
                    <div className={JoinStyle.formGroup}>
                        <FontAwesomeIcon icon={faUser} className={JoinStyle.icon} />
                        <input className={JoinStyle.input} type="text" placeholder="사용자 이름" name='name' value={name} onChange={onInput} ref={nameRef} required />
                    </div>
                    {nameDiv && <div className={JoinStyle.error}>{nameDiv}</div>}

                    <div className={JoinStyle.formGroup}>
                        <FontAwesomeIcon icon={faIdBadge} className={JoinStyle.icon} />
                        <input className={JoinStyle.input} type="text" placeholder="닉네임" name='nickName' value={nickName} onChange={onInput} onBlur={findByNickName} required />
                    </div>
                    {nickNameDiv && <div className={JoinStyle.error} style={{ color: nickNameDiv === '사용 가능' ? 'blue' : 'red' }}>{nickNameDiv}</div>}

                    <div className={JoinStyle.formGroup}>
                        <FontAwesomeIcon icon={faEnvelope} className={JoinStyle.icon} />
                        <input className={JoinStyle.input} type="email" placeholder="이메일" name='email' value={email} onChange={onInput} onBlur={findByEmail} required />
                    </div>
                    {emailDiv && <div className={JoinStyle.error} style={{ color: emailDiv === '사용 가능' ? 'blue' : 'red' || emailDiv === '유효하지 않은 이메일 형식'}}>{emailDiv}</div>}

                    <div className={JoinStyle.formGroup}>
                        <FontAwesomeIcon icon={faLock} className={JoinStyle.icon} />
                        <input className={JoinStyle.input} type="password" placeholder="비밀번호" name='pwd' value={pwd} onChange={onInput} required />
                    </div>
                    {pwdDiv && <div className={JoinStyle.error}>{pwdDiv}</div>}

                    <div className={JoinStyle.buttonContainer}>
                        <button className={JoinStyle.button} type="submit">회원가입</button>
                        <button className={JoinStyle.button} onClick={onReset}>취소</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Join;