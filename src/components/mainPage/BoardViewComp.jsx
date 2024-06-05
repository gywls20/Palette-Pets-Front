// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faHeart } from '@fortawesome/free-solid-svg-icons';
import AutoSlideImgComp from './AutoSlideImgComp';
import Swal from 'sweetalert2'

import BoardViewStyle from '../../styles/mainPage/boardView.module.css'
import Anhae from '../../image/anhae.jpg'
import PetCategoryComp from '../PetCategoryComp'
import { useSelector } from 'react-redux';
import BoardView from './BoardView';

const BoardViewComp = () => {
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

                <BoardView/>
                
                <BoardView/>
                
                <BoardView/>
                
                <BoardView/>
            </div>
        </>
    );
};

export default BoardViewComp;