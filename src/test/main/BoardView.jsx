import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightDots, faCommentDots, faDog, faHeart, faHouseMedical, faLocationDot } from '@fortawesome/free-solid-svg-icons';

import BoardViewStyle from '../css/boardView.module.css'
import Cat from '../image/cat.jpg'
import Pat from '../image/pat.jpg'


const BoardView = () => {

    return (
        <div>
            <div className={BoardViewStyle.imageTool}>
                <img className={BoardViewStyle.image} src={Pat} alt="Pat" />
            </div>

            <div className={BoardViewStyle.iconsBar}>
                <button className={BoardViewStyle.iconButtonColumn}>
                    <FontAwesomeIcon icon={faArrowUpRightDots} style={{ color: "#ff0000" }} className={BoardViewStyle.iconColumn} />
                    <span>인기</span>
                </button>

                <button className={BoardViewStyle.iconButtonColumn}>
                    <FontAwesomeIcon icon={faHouseMedical} style={{color: "#ff0000",}} className={BoardViewStyle.iconColumn} />
                    <span>병원</span>
                </button>

                <button className={BoardViewStyle.iconButtonColumn}>
                    <FontAwesomeIcon icon={faDog} style={{color: "#9a4a09",}} className={BoardViewStyle.iconColumn} />
                    <span>미용</span>
                </button>

                <button className={BoardViewStyle.iconButtonColumn}>
                    <FontAwesomeIcon icon={faLocationDot} style={{color: "#002ee6",}} className={BoardViewStyle.iconColumn} />
                    <span>산책</span>
                </button>
            </div>

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
                                <FontAwesomeIcon icon={faHeart} style={{ color: "#ffffff" }} />
                                <span className={BoardViewStyle.actionText}>좋아요</span>
                            </button>

                            <button className={BoardViewStyle.postActionButton}>
                                <FontAwesomeIcon icon={faCommentDots} />
                                <span className={BoardViewStyle.actionText}>댓글</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BoardView;