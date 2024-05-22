import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faStar, faDoorOpen, faHeart, faBars, faCommentDots, faMessage, faArrowUpRightDots, faBell, faHouseMedical, faDog, faLocationDot } from '@fortawesome/free-solid-svg-icons';

import MainStyle from '../css/main.module.css'
import Pat from '../image/pat.jpg'
import Sb from '../image/sb.jpg'
import Cat from '../image/cat.jpg'

const Main = () => {
    const nickname = "댕댕이"; // 실제로는 로그인된 사용자 데이터에서 가져와야 합니다.

    const [like, setLike] = useState(false)

    const [showCommentBox, setShowCommentBox] = useState(false)
    const [comment, setComment] = useState('')

    const ToggleLike = () => setLike(!like)

    const toggleCommentBox = () => setShowCommentBox(!showCommentBox)

    const handleCommentChange = (e) => setComment(e.target.value)

    const handleCommentSubmit = (e) => {
        e.preventDefault()
        console.log("댓글 체줄", comment)
        setComment('')
        setShowCommentBox(false)
    }

    return (
        <div className={MainStyle.container}>
            <header className={MainStyle.header}>
                <span className={MainStyle.title}>냥가왈부</span>
                <div className={MainStyle.welcomeMessage}>{nickname}님 화영합니다.</div>

                <div className={MainStyle.icons}>
                    <button className={MainStyle.iconButton}>
                        <Link to='/user/allam'>
                            <FontAwesomeIcon icon={faBell} />
                        </Link>
                    </button>

                    <button className={MainStyle.iconButton}>
                        <Link to='/'>
                            <FontAwesomeIcon icon={faDoorOpen} />
                        </Link>
                    </button>
                </div>
            </header>

            <tbody className={MainStyle.body}>
                <div className={MainStyle.titleContainer}>
                    <h2 className={MainStyle.font}>
                        <img className={MainStyle.iconImage} src="https://www.google.com/logos/fnbx/westminster_dog_show/westminster_kp_dm.gif" alt="" width="35" />
                        이런 반려동물 모여라
                        <img className={MainStyle.iconImage} src="https://www.google.com/logos/fnbx/animal_paws/cat_kp_dm.gif" alt="" width="35" />
                    </h2>
                </div>

                <div className={MainStyle.iframeContainer}>
                    <iframe className={MainStyle.iframe} src="https://www.youtube.com/embed/6wE64jNyp1c?autoplay=1&loop=1&playlist=6wE64jNyp1c&controls=0" title="언니야 나랑놀아" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>

                <div className={MainStyle.event}>
                    <img src={Sb} alt="Event" className={MainStyle.eventImage} />
                    <div>
                        <span className={MainStyle.eventTitle}>이벤트</span>
                        <p className={MainStyle.eventDescription}>‘5~6월 TailWinds’ 우리 도담도담 열려볼까! 5.20 - 6.25</p>
                    </div>
                </div>

                <div className={MainStyle.balance}>
                    <p className={MainStyle.balanceAmount}>TailWinds 퀘스트</p>
                    <p className={MainStyle.balanceDescription}>현재 보유한 TailWinds 포인트 : 10,000</p>
                </div>

                <div className={MainStyle.image}>
                    <img src={Pat} alt="Pat" />
                </div>

                <div className={MainStyle.iconsBar}>
                    <button className={MainStyle.iconButtonColumn}>
                        <FontAwesomeIcon icon={faArrowUpRightDots} style={{ color: "#ff0000" }} className={MainStyle.iconColumn} />
                        <span>인기</span>
                    </button>

                    <button className={MainStyle.iconButtonColumn}>
                        <FontAwesomeIcon icon={faHouseMedical} style={{color: "#ff0000",}} className={MainStyle.iconColumn} />
                        <span>병원</span>
                    </button>

                    <button className={MainStyle.iconButtonColumn}>
                    <FontAwesomeIcon icon={faDog} style={{color: "#9a4a09",}} className={MainStyle.iconColumn} />
                        <span>미용</span>
                    </button>

                    <button className={MainStyle.iconButtonColumn}>
                    <FontAwesomeIcon icon={faLocationDot} style={{color: "#002ee6",}} className={MainStyle.iconColumn} />
                        <span>산책</span>
                    </button>
                </div>

                <div className={MainStyle.postsSection}>
                    <div className={MainStyle.postsHeader}>
                        <span className={MainStyle.postsTitle}>오늘의 인기글</span>
                        <button className={MainStyle.postsMore}>더보기</button>
                    </div>

                    <div className={MainStyle.postsList}>
                        <div className={MainStyle.post}>
                            <div className={MainStyle.postHeader}>
                                <img src={Cat} alt="User" className={MainStyle.postUserImage} />
                                <div>
                                    <p className={MainStyle.postUserName}>사용자 이름</p>
                                    <p className={MainStyle.postTime}>2시간 전</p>
                                </div>
                            </div>
                            <p className={MainStyle.postContent}>여기에 게시물 내용이 들어갑니다. 여기에 게시물 내용이 들어갑니다.</p>
                            <div className={MainStyle.postActions}>
                                <button className={MainStyle.postActionButton} onClick={ToggleLike}>
                                    <FontAwesomeIcon icon={faHeart} style={{ color: like ? "#ff0000" : "#ffffff" }} />
                                    <span className={MainStyle.actionText}>좋아요</span>
                                </button>
                                <button className={MainStyle.postActionButton} onClick={toggleCommentBox}>
                                    <FontAwesomeIcon icon={faCommentDots} />
                                    <span className={MainStyle.actionText}>댓글</span>
                                </button>
                            </div>
                                
                            <div>
                                {showCommentBox && (
                                    <form onSubmit={handleCommentSubmit} className={MainStyle.commentForm}>
                                        <textarea
                                            value={comment}
                                            onChange={handleCommentChange}
                                            placeholder="댓글을 입력하세요"
                                            className={MainStyle.commentBox}
                                        />
                                        <button type="submit" className={MainStyle.postActionButton}>제출</button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </tbody>

            <tfoot>
                <div className={MainStyle.navBar}>
                    <button className={MainStyle.iconButtonColumn}>
                        <FontAwesomeIcon icon={faHouse} className={MainStyle.iconColumn} />
                        <span>홈</span>
                    </button>
                    <button className={MainStyle.iconButtonColumn}>
                        <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} className={MainStyle.iconColumn} />
                        <span>퀘스트</span>
                    </button>
                    <button className={MainStyle.iconButtonColumn}>
                        <FontAwesomeIcon icon={faMessage} className={MainStyle.iconColumn} />
                        <span>커뮤니티</span>
                    </button>
                    <button className={MainStyle.iconButtonColumn}>
                        <FontAwesomeIcon icon={faBars} className={MainStyle.iconColumn} />
                        <span>메뉴</span>
                    </button>
                </div>
            </tfoot>
        </div>
    );
};

export default Main;