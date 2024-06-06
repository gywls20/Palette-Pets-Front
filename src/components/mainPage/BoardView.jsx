import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Box, Modal } from '@mui/material';
import Swal from 'sweetalert2'

import BoardViewStyle from '../../styles/mainPage/boardView.module.css'
import Anhae from '../../image/anhae.jpg'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BoardView = () => {
    const [modal, setModal] = useState(false);
    const [like, setLike] = useState(false);
    const [showCommentBox, setShowCommentBox] = useState(false);
    const [comment, setComment] = useState('');
    const token = useSelector((state) => state).MemberSlice.token;

    const openModal = () => setModal(true);
    const closeModal = () => setModal(false);

    const ToggleLike = () => {
        if (token === '') {
            Swal.fire({
                title: '로그인이 필요합니다.',
                text: '로그인 해주세요^^',
                icon: 'warning'
            });
        } else {
            setLike(!like);
        }
    };

    const toggleCommentBox = () => {
        if (token === '') {
            Swal.fire({
                title: '로그인이 필요합니다.',
                text: '로그인 해주세요^^',
                icon: 'warning'
            });
        } else {
            setShowCommentBox(!showCommentBox);
        }
    };

    const handleCommentChange = (e) => setComment(e.target.value);

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        console.log("댓글 제출", comment);
        setComment('');
        setShowCommentBox(false);
    };

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
        <div className={BoardViewStyle.postsList}>
            <div className={BoardViewStyle.post}>
                <div className={BoardViewStyle.postHeader}>
                    <img src={Anhae} alt="User" className={BoardViewStyle.postUserImage} onClick={openModal} />
                    <div>
                        <p className={BoardViewStyle.postUserName}>사용자 닉네임</p>
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
                        <p className={BoardViewStyle.postUserName}>사용자 닉네임</p>
                        <img src={Anhae} alt="User" />
                        <div className={BoardViewStyle.ModalContainer}>
                            <button>팔로우</button>
                            <button>
                                <Link to='http://175.45.200.47:3000/chat/a' style={{ color: '#ffffff' }}>1:1 대화</Link>
                            </button>
                        </div>
                    </Box>
                </Modal>

                <p className={BoardViewStyle.postContent}>여기에 게시물 내용이 들어갑니다.</p>
                <div className={BoardViewStyle.postActions}>
                    <button className={BoardViewStyle.postActionButton} onClick={ToggleLike}>
                        <FontAwesomeIcon icon={faHeart} className={BoardViewStyle.postAction} style={{ color: like ? "#ff0000" : "#ffffff" }} />
                        <span> 좋아요</span>
                    </button>

                    <button className={BoardViewStyle.postActionButton} onClick={toggleCommentBox}>
                        <FontAwesomeIcon icon={faCommentDots} className={BoardViewStyle.postAction} />
                        <span> 댓글</span>
                    </button>
                </div>

                {showCommentBox && (
                    <form onSubmit={handleCommentSubmit} className={BoardViewStyle.commentForm}>
                        <textarea
                            value={comment}
                            onChange={handleCommentChange}
                            placeholder="댓글을 입력하세요"
                            className={BoardViewStyle.commentBox}
                        />
                        <button type="submit" className={BoardViewStyle.postActionButton}>제출</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default BoardView;