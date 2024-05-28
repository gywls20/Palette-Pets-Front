import React from 'react';
import VideoStyle from '../../styles/mainPage/video.module.css'

const VideoComp = () => {
    return (
        <>
            <div className={VideoStyle.body}>
                <div className={VideoStyle.title}>
                    <h2 >
                        <img src="https://www.google.com/logos/fnbx/westminster_dog_show/westminster_kp_dm.gif" alt="" />
                        이런 반려동물 모여라
                        <img src="https://www.google.com/logos/fnbx/animal_paws/cat_kp_dm.gif" alt=""  />
                    </h2>
                </div>

                <div className={VideoStyle.iframe}>
                    <iframe className={VideoStyle.video} src="https://www.youtube.com/embed/6wE64jNyp1c?autoplay=1&loop=1&playlist=6wE64jNyp1c&controls=0" title="언니야 나랑놀아" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
        </>
    );
};

export default VideoComp;