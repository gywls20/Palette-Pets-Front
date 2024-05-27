import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Box, Modal } from '@mui/material';

import BoardViewStyle from '../css/boardView.module.css'
import ImgStyle from '../css/img.module.css';

import Cat from '../image/cat.jpg'
import Pat from '../image/pat.jpg'
import Category from './Category';


const BoardView = () => {
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

    return (
        <div>
            <div className={ImgStyle.imageTool}>
                <img className={ImgStyle.image} src={Pat} alt="Pat" />
            </div>

            <Category/>            
            
            <div className={BoardViewStyle.postsSection}>
                <div className={BoardViewStyle.postsHeader}>
                    <span className={BoardViewStyle.postsTitle}>오늘의 인기글</span>
                    <button className={BoardViewStyle.postsMore}>더보기</button>
                </div>

                <div className={BoardViewStyle.postsList}>
                    <div className={BoardViewStyle.post}>
                        <div className={BoardViewStyle.postHeader}>
                            <img src={Cat} alt="User" className={BoardViewStyle.postUserImage} onClick={openModal} />
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
                                <img src={Cat} alt="User"/>
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