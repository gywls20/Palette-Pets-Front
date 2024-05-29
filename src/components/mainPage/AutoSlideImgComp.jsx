import React, { useEffect, useState } from 'react';
import ImgStyle from '../../styles/img.module.css';

import pet from '../../image/pet.jpg';
import donggeul from '../../image/donggeul.jpg';
import ppaekkom from '../../image/ppaekkom.jpg';
import snowdog from '../../image/snowdog.jpg';
import sleepingdog2 from '../../image/sleepingdog2.jpg';
import sleepingdog from '../../image/sleepingdog.jpg';
import jang1 from '../../image/jang1.jpg';
import jang2 from '../../image/jang2.jpg';
import nyung1 from '../../image/nyung1.jpg';
import nyung2 from '../../image/nyung2.jpg';
import nyung3 from '../../image/nyung3.jpg';
import nyung4 from '../../image/nyung4.jpg';
import nyung5 from '../../image/nyung5.jpg';
import nyung6 from '../../image/nyung6.jpg';
import goguma from '../../image/goguma.jpg';

//필요한 이미지
const images = [
    pet,
    nyung1,
    nyung2,
    nyung3,
    nyung4,
    nyung5,
    nyung6,
    goguma,
    donggeul,
    ppaekkom,
    snowdog,
    sleepingdog2,
    sleepingdog,
    jang1,
    jang2
];

const AutoSlideImgComp = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); //3초마다 슬라이드 전환

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className={ImgStyle.imageTool}>
                <img className={ImgStyle.image} src={images[currentIndex]} alt={`slide ${currentIndex}`} />
            </div>
        </>
    );
};

export default AutoSlideImgComp;