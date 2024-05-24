import React from 'react';

import ImgStyle from '../css/img.module.css'
import WelcomeImage from '../image/welcome.jpg'

const WelcomeImg = () => {
    return (
        <div className={ImgStyle.imageTool}>
            <img src={WelcomeImage} alt="Welcome" className={ImgStyle.image} />
        </div>
    );
};

export default WelcomeImg;