import React from 'react';

import ImgStyle from '../../styles/img.module.css'
import WelcomeImage from '../../image/join/welcome.jpg'

const WelcomeImgComp = () => {
    return (
        <div className={ImgStyle.imageTool}>
            <img src={WelcomeImage} alt="Welcome" className={ImgStyle.image} />
        </div>
    );
};

export default WelcomeImgComp;