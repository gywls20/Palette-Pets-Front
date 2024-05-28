// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Box, Modal } from '@mui/material';

import BoardViewStyle from '../../styles/mainPage/boardView.module.css'
import ImgStyle from '../../styles/img.module.css';
import Anhae from '../../image/anhae.jpg'
import CategoryComp from '../CategoryComp';

import pet from '../../image/pet.jpg';
import donggeul from '../../image/donggeul.jpg';
import ppaekkom from '../../image/ppaekkom.jpg';
import snowdog from '../../image/snowdog.jpg';
import sleepingdog2 from '../../image/sleepingdog2.jpg';
import sleepingdog from '../../image/sleepingdog.jpg';
import sleepingcat from '../../image/sleepingcat.jpg';

//필요한 이미지
const images = [
    pet,
    donggeul,
    ppaekkom,
    snowdog,
    sleepingdog2,
    sleepingdog,
    sleepingcat
];

const BoardView = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const [modal, setModal] = useState(false)

    const openModal = () => setModal(true)

    const closeModal = () => setModal(false)

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); //3초마다 슬라이드 전환

        return () => clearInterval(interval);
    }, []);
    
    return (
        <div>
            <div className={ImgStyle.imageTool}>
                <img className={ImgStyle.image} src={images[currentIndex]} alt={`slide ${currentIndex}`} />
            </div>

            <CategoryComp/>            
            
            <div className={BoardViewStyle.postsSection}>
                <div className={BoardViewStyle.postsHeader}>
                    <span className={BoardViewStyle.postsTitle}>오늘의 인기글</span>
                    <button className={BoardViewStyle.postsMore}>더보기</button>
                </div>

                <div className={BoardViewStyle.postsList}>
                    <div className={BoardViewStyle.post}>
                        <div className={BoardViewStyle.postHeader}>
                            <img src={Anhae} alt="User" className={BoardViewStyle.postUserImage} onClick={openModal} />
                            <div>
                                <p className={BoardViewStyle.postUserName}>사용자 이름</p>
                                <p className={BoardViewStyle.postTime}>2시간 전</p>
                            </div>
                        </div>

                        <Modal
                            open={modal}
                            onClose={closeModal}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <img src={Anhae} alt="User"/>
                            </Box>
                        </Modal>

                        <p className={BoardViewStyle.postContent}>여기에 게시물 내용이 들어갑니다. 여기에 게시물 내용이 들어갑니다.</p>
                        <div className={BoardViewStyle.postActions}>
                            <button className={BoardViewStyle.postActionButton}>
                                <FontAwesomeIcon icon={faHeart} className={BoardViewStyle.postAction} style={{ color: "#ffffff" }} />
                                <span>좋아요</span>
                            </button>

                            <button className={BoardViewStyle.postActionButton}>
                                <FontAwesomeIcon icon={faCommentDots} className={BoardViewStyle.postAction} />
                                <span>댓글</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BoardView;