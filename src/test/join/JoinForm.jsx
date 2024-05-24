import React from 'react';
import { faEnvelope, faIdBadge, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import JoinStyle from '../css/join.module.css'

const JoinForm = () => {
    return (
        <div>
            <div className={JoinStyle.header}>
                <span className={JoinStyle.title}>회원가입</span>
            </div>

            <div className={JoinStyle.body}>
                <form className={JoinStyle.form}>
                    <div className={JoinStyle.formGroup}>
                        <FontAwesomeIcon icon={faUser} className={JoinStyle.icon} />
                        <input className={JoinStyle.input} type="text" placeholder="사용자 이름" name='name' required />
                    </div>
                    
                    <div className={JoinStyle.formGroup}>
                        <FontAwesomeIcon icon={faIdBadge} className={JoinStyle.icon} />
                        <input className={JoinStyle.input} type="text" placeholder="닉네임" name='nickName' required />
                    </div>

                    <div className={JoinStyle.formGroup}>
                        <FontAwesomeIcon icon={faEnvelope} className={JoinStyle.icon} />
                        <input className={JoinStyle.input} type="email" placeholder="이메일" name='email' required />
                    </div>

                    <div className={JoinStyle.formGroup}>
                        <FontAwesomeIcon icon={faLock} className={JoinStyle.icon} />
                        <input className={JoinStyle.input} type="password" placeholder="비밀번호" name='pwd' required />
                    </div>

                    <div className={JoinStyle.buttonContainer}>
                        <button className={JoinStyle.button} type="submit">회원가입</button>
                        <button className={JoinStyle.button} >취소</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default JoinForm;