import React from 'react';

import ImgStyle from '../css/img.module.css';
import LoginImage from '../image/login.jpg';

const LoginImg = () => {
    return (
        <div className={ImgStyle.imageTool}>
            <img src={LoginImage} alt="Login" className={ImgStyle.image} />
        </div>
    );
};

export default LoginImg;