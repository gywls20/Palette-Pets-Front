// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Box, Modal } from '@mui/material';
import AutoSlideImgComp from './AutoSlideImgComp';
import Swal from 'sweetalert2'

import BoardViewStyle from '../../styles/mainPage/boardView.module.css'
import Anhae from '../../image/anhae.jpg'
import PetCategoryComp from '../PetCategoryComp'

const BoardView = () => {
    const [modal, setModal] = useState(false)

    const openModal = () => setModal(true)

    const closeModal = () => setModal(false)

    const onLogin = () => {
        Swal.fire({
            title: '로그인이 필요합니다.',
            text: '로그인 해주세요^^',
            icon: 'false'
        })
    }

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
        <>
            <AutoSlideImgComp/>

            <PetCategoryComp/>            
            
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
                                <p className={BoardViewStyle.postUserName}>사용자 닉내임</p>
                                <p className={BoardViewStyle.postTime}>2시간 전</p>
                            </div>
                        </div>

                        <p className={BoardViewStyle.postContent}>여기에 게시물 내용이 들어갑니다. 여기에 게시물 내용이 들어갑니다.</p>
                        <div className={BoardViewStyle.postActions}>
                            <button className={BoardViewStyle.postActionButton} onClick={onLogin}>
                                <FontAwesomeIcon icon={faHeart} className={BoardViewStyle.postAction} style={{ color: "#ffffff" }} />
                                <span> 좋아요</span>
                            </button>

                            <button className={BoardViewStyle.postActionButton} onClick={onLogin}>
                                <FontAwesomeIcon icon={faCommentDots} className={BoardViewStyle.postAction} />
                                <span> 댓글</span>
                            </button>
                        </div>
                    </div>
                </div>
                <br/>
                <div className={BoardViewStyle.postsList}>
                    <div className={BoardViewStyle.post}>
                        <div className={BoardViewStyle.postHeader}>
                            <img src={Anhae} alt="User" className={BoardViewStyle.postUserImage} onClick={openModal} />
                            <div>
                                <p className={BoardViewStyle.postUserName}>사용자 닉내임</p>
                                <p className={BoardViewStyle.postTime}>2시간 전</p>
                            </div>
                        </div>

                        <p className={BoardViewStyle.postContent}>여기에 게시물 내용이 들어갑니다. 여기에 게시물 내용이 들어갑니다.</p>
                        <div className={BoardViewStyle.postActions}>
                            <button className={BoardViewStyle.postActionButton} onClick={onLogin}>
                                <FontAwesomeIcon icon={faHeart} className={BoardViewStyle.postAction} style={{ color: "#ffffff" }} />
                                <span> 좋아요</span>
                            </button>

                            <button className={BoardViewStyle.postActionButton} onClick={onLogin}>
                                <FontAwesomeIcon icon={faCommentDots} className={BoardViewStyle.postAction} />
                                <span> 댓글</span>
                            </button>
                        </div>
                    </div>
                </div>
                <br/>
                <div className={BoardViewStyle.postsList}>
                    <div className={BoardViewStyle.post}>
                        <div className={BoardViewStyle.postHeader}>
                            <img src={Anhae} alt="User" className={BoardViewStyle.postUserImage} onClick={openModal} />
                            <div>
                                <p className={BoardViewStyle.postUserName}>사용자 닉내임</p>
                                <p className={BoardViewStyle.postTime}>2시간 전</p>
                            </div>
                        </div>

                        <p className={BoardViewStyle.postContent}>여기에 게시물 내용이 들어갑니다. 여기에 게시물 내용이 들어갑니다.</p>
                        <div className={BoardViewStyle.postActions}>
                            <button className={BoardViewStyle.postActionButton} onClick={onLogin}>
                                <FontAwesomeIcon icon={faHeart} className={BoardViewStyle.postAction} style={{ color: "#ffffff" }} />
                                <span> 좋아요</span>
                            </button>

                            <button className={BoardViewStyle.postActionButton} onClick={onLogin}>
                                <FontAwesomeIcon icon={faCommentDots} className={BoardViewStyle.postAction} />
                                <span> 댓글</span>
                            </button>
                        </div>
                    </div>
                </div>
                <br/>
                <div className={BoardViewStyle.postsList}>
                    <div className={BoardViewStyle.post}>
                        <div className={BoardViewStyle.postHeader}>
                            <img src={Anhae} alt="User" className={BoardViewStyle.postUserImage} onClick={openModal} />
                            <div>
                                <p className={BoardViewStyle.postUserName}>사용자 닉내임</p>
                                <p className={BoardViewStyle.postTime}>2시간 전</p>
                            </div>
                        </div>

                        <p className={BoardViewStyle.postContent}>여기에 게시물 내용이 들어갑니다. 여기에 게시물 내용이 들어갑니다.</p>
                        <div className={BoardViewStyle.postActions}>
                            <button className={BoardViewStyle.postActionButton} onClick={onLogin}>
                                <FontAwesomeIcon icon={faHeart} className={BoardViewStyle.postAction} style={{ color: "#ffffff" }} />
                                <span> 좋아요</span>
                            </button>

                            <button className={BoardViewStyle.postActionButton} onClick={onLogin}>
                                <FontAwesomeIcon icon={faCommentDots} className={BoardViewStyle.postAction} />
                                <span> 댓글</span>
                            </button>
                        </div>
                    </div>
                </div>
                <br/>
                <div className={BoardViewStyle.postsList}>
                    <div className={BoardViewStyle.post}>
                        <div className={BoardViewStyle.postHeader}>
                            <img src={Anhae} alt="User" className={BoardViewStyle.postUserImage} onClick={openModal} />
                            <div>
                                <p className={BoardViewStyle.postUserName}>사용자 닉내임</p>
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
                                <p className={BoardViewStyle.postUserName}>사용자 닉내임</p>
                                <img src={Anhae} alt="User"/>
                                <div className={BoardViewStyle.ModalContainer}>
                                    <button>팔라우</button>
                                    <button>1:1대화</button>
                                </div>
                            </Box>
                        </Modal>

                        <p className={BoardViewStyle.postContent}>여기에 게시물 내용이 들어갑니다. 여기에 게시물 내용이 들어갑니다.</p>
                        <div className={BoardViewStyle.postActions}>
                            <button className={BoardViewStyle.postActionButton} onClick={onLogin}>
                                <FontAwesomeIcon icon={faHeart} className={BoardViewStyle.postAction} style={{ color: "#ffffff" }} />
                                <span> 좋아요</span>
                            </button>

                            <button className={BoardViewStyle.postActionButton} onClick={onLogin}>
                                <FontAwesomeIcon icon={faCommentDots} className={BoardViewStyle.postAction} />
                                <span> 댓글</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BoardView;