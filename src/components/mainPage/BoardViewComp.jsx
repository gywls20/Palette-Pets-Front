// eslint-disable-next-line no-unused-vars
import React from 'react';
import AutoSlideImgComp from './AutoSlideImgComp';
<<<<<<< HEAD
import Swal from 'sweetalert2'
import connectChat from './connectChat';

=======
>>>>>>> 63e4694e83b34063697bdbddb307c6f6e9b0e050
import BoardViewStyle from '../../styles/mainPage/boardView.module.css'
import PetCategoryComp from '../PetCategoryComp'
import BoardView from './BoardView';

const BoardViewComp = () => {
    
    return (
        <>
            <AutoSlideImgComp/>
            <br/>
            <PetCategoryComp/>            
            
            <div className={BoardViewStyle.postsSection}>
                <div className={BoardViewStyle.postsHeader}>
                    <span className={BoardViewStyle.postsTitle}>오늘의 인기글</span>
                    <button className={BoardViewStyle.postsMore}>더보기</button>
                </div>
                <BoardView/>

<<<<<<< HEAD
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
                                    <button onClick={connectChat}>1:1대화</button>
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
=======
                <BoardView/>
                
                <BoardView/>
                
                <BoardView/>
                
                <BoardView/>
>>>>>>> 63e4694e83b34063697bdbddb307c6f6e9b0e050
            </div>
        </>
    );
};

export default BoardViewComp;