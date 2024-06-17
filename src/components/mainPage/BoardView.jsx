import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Box, Modal } from '@mui/material';
import Swal from 'sweetalert2'

import BoardViewStyle from '../../styles/mainPage/boardView.module.css'
import Anhae from '../../image/anhae.jpg'
import { useSelector } from 'react-redux';
import connectChat from './connectChat';
import axios from 'axios';
import {url} from '../../utils/single';

const BoardView = () => {
    const [modal, setModal] = useState({});
    const [like, setLike] = useState(false);
    const [showCommentBox, setShowCommentBox] = useState(false);
    const [comment, setComment] = useState('');
    const token = useSelector((state) => state).MemberSlice.token;


    const [articles, setArticles] = useState([]);

    const openModal = (articleId) => {
        setModal((prevState) => ({
            ...prevState,
            [articleId]: true
        }));
    }
    const closeModal = (articleId) => {
        setModal((prevState) => ({
            ...prevState,
            [articleId]: false
        }));
    }

    const alarm = () => {
        console.log("alarm")
        Swal.fire({
            title: '로그인이 필요합니다.',
            text: '로그인 해주세요^^',
            icon: 'warning'
        });
    }

    const ToggleLike = () => {
        if (token === '') {
            alarm();
        } else {
            setLike(!like);
        }
    };

    const requestChat = (e) =>() => {
        alert("글쓴이 아이디 : " + e)
        console.log("click")
        if (token === '') {
            console.log("token is on")
            alarm();
        } else {
            connectChat(e);
        }
    }

    const toggleCommentBox = () => {
        if (token === '') {
            alarm();
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

    const fetchData = async () => {
        try {
            const result = await axios.get(`${url}/popular`)
            .then(res => res.data 
            )
            .catch(err => {
                console.error(err);
                return err.response.data;
            });
            console.log("List result :: ",result);
            setArticles(result);
        } catch (e) {
            console.error(e);
        }
    
    };

    useEffect(() => {
        fetchData();
    }, []);

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
            {articles && articles.map((article) => (
                <div key={article.articleId} className={BoardViewStyle.postsList}>
                    <div className={BoardViewStyle.post}>
                        <div className={BoardViewStyle.postHeader}>
                            <img src={Anhae} alt="User" className={BoardViewStyle.postUserImage} onClick={() => openModal(article.articleId)} />
                            <div>
                                <p className={BoardViewStyle.postUserName}>{article.memberNickname}님</p>
                                <p className={BoardViewStyle.postContent}>{article.title}</p>
                                <p className={BoardViewStyle.postTime}>2시간 전</p>
                                <p className={BoardViewStyle.postTime}>좋아요 : {article.countLoves}</p>
                            </div>
                        </div>

                        <Modal
                            open={modal[article.articleId]}
                            onClose={() => closeModal(article.articleId)}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description">
                            <Box sx={style}>
                                <p className={BoardViewStyle.postUserName}>{article.memberNickname}</p>
                                <img src={Anhae} alt="User" />
                                <div className={BoardViewStyle.ModalContainer}>
                                    <button>팔로우</button>
                                    <button onClick={requestChat(article.memberId)}>
                                        <span style={{ color: '#ffffff' }}>1:1 대화</span>
                                    </button>
                                </div>
                            </Box>
                        </Modal>

                        <p className={BoardViewStyle.postContent}>{article.content}</p>
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
            ))}
        </>
    );
};

export default BoardView;