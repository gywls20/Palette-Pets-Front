import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faHeart } from '@fortawesome/free-solid-svg-icons';

import BoardViewStyle from '../css/boardView.module.css'
import ImgStyle from '../css/img.module.css';

import Cat from '../image/cat.jpg'
import Pat from '../image/pat.jpg'
import Category from './Category';


const BoardView = () => {

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
                            <img src={Cat} alt="User" className={BoardViewStyle.postUserImage} />
                            <div>
                                <p className={BoardViewStyle.postUserName}>사용자 이름</p>
                                <p className={BoardViewStyle.postTime}>2시간 전</p>
                            </div>
                        </div>
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