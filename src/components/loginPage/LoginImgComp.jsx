import React from 'react';

import ImgStyle from '../../styles/img.module.css';
import LoginImage from '../../image/login/login.jpg';

const LoginImgComp = () => {
    return (
        <div className={ImgStyle.imageTool}>
            <img src={LoginImage} alt="Login" className={ImgStyle.image} />
        </div>
    );
};

export default LoginImgComp;