import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faStar, faUser, faHeart, faBars, faCommentDots, faMessage, faArrowUpRightDots, faBell, faHouseMedical, faDog, faLocationDot } from '@fortawesome/free-solid-svg-icons';

import IndexStyle from '../css/index.module.css'
import Pat from '../image/pat.jpg'
import Sb from '../image/sb.jpg'
import Cat from '../image/cat.jpg'

const Index = () => {
    return (
        <div className={IndexStyle.container}>
            <thead>
                <div className={IndexStyle.header}>
                    <span className={IndexStyle.title}>냥가왈부</span>

                    <div className={IndexStyle.icons}>
                        <button className={IndexStyle.iconButton}>
                            <FontAwesomeIcon icon={faBell} />
                        </button>

                        <button className={IndexStyle.iconButton}>
                            
                                <FontAwesomeIcon icon={faUser} />
                            
                        </button>
                    </div>
                </div>
            </thead>

            <tbody className={IndexStyle.body}>
                <div className={IndexStyle.titleContainer}>
                    <h2 className={IndexStyle.font}>
                        <img className={IndexStyle.iconImage} src="https://www.google.com/logos/fnbx/westminster_dog_show/westminster_kp_dm.gif" alt="" width="35" />
                        이런 반려동물 모여라
                        <img className={IndexStyle.iconImage} src="https://www.google.com/logos/fnbx/animal_paws/cat_kp_dm.gif" alt="" width="35" />
                    </h2>
                </div>

                <div className={IndexStyle.iframeContainer}>
                    <iframe className={IndexStyle.iframe} src="https://www.youtube.com/embed/6wE64jNyp1c?autoplay=1&loop=1&playlist=6wE64jNyp1c&controls=0" title="언니야 나랑놀아" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>

                <div className={IndexStyle.event}>
                    <img src={Sb} alt="Event" className={IndexStyle.eventImage} />
                    <div>
                        <span className={IndexStyle.eventTitle}>이벤트</span>
                        <p className={IndexStyle.eventDescription}>‘5~6월 TailWinds’ 우리 도담도담 열려볼까! 5.20 - 6.25</p>
                    </div>
                </div>

                <div className={IndexStyle.balance}>
                    <p className={IndexStyle.balanceAmount}>TailWinds 퀘스트</p>
                    <p className={IndexStyle.balanceDescription}>현재 보유한 TailWinds 포인트 : 10,000</p>
                </div>

                <div className={IndexStyle.image}>
                    <img src={Pat} alt="Pat" />
                </div>

                <div className={IndexStyle.iconsBar}>
                    <button className={IndexStyle.iconButtonColumn}>
                        <FontAwesomeIcon icon={faArrowUpRightDots} style={{ color: "#ff0000" }} className={IndexStyle.iconColumn} />
                        <span>인기</span>
                    </button>

                    <button className={IndexStyle.iconButtonColumn}>
                        <FontAwesomeIcon icon={faHouseMedical} style={{color: "#ff0000",}} className={IndexStyle.iconColumn} />
                        <span>병원</span>
                    </button>

                    <button className={IndexStyle.iconButtonColumn}>
                    <FontAwesomeIcon icon={faDog} style={{color: "#9a4a09",}} className={IndexStyle.iconColumn} />
                        <span>미용</span>
                    </button>

                    <button className={IndexStyle.iconButtonColumn}>
                    <FontAwesomeIcon icon={faLocationDot} style={{color: "#002ee6",}} className={IndexStyle.iconColumn} />
                        <span>산책</span>
                    </button>
                </div>

                <div className={IndexStyle.postsSection}>
                    <div className={IndexStyle.postsHeader}>
                        <span className={IndexStyle.postsTitle}>오늘의 인기글</span>
                        <button className={IndexStyle.postsMore}>더보기</button>
                    </div>

                    <div className={IndexStyle.postsList}>
                        <div className={IndexStyle.post}>
                            <div className={IndexStyle.postHeader}>
                                <img src={Cat} alt="User" className={IndexStyle.postUserImage} />
                                <div>
                                    <p className={IndexStyle.postUserName}>사용자 이름</p>
                                    <p className={IndexStyle.postTime}>2시간 전</p>
                                </div>
                            </div>
                            <p className={IndexStyle.postContent}>여기에 게시물 내용이 들어갑니다. 여기에 게시물 내용이 들어갑니다.</p>
                            <div className={IndexStyle.postActions}>
                                <button className={IndexStyle.postActionButton} onClick={LoginCheck}>
                                    <FontAwesomeIcon icon={faHeart} style={{ color: "#ffffff" }} />
                                    <span className={IndexStyle.actionText}>좋아요</span>
                                </button>

                                <button className={IndexStyle.postActionButton} onClick={LoginCheck}>
                                    <FontAwesomeIcon icon={faCommentDots} />
                                    <span className={IndexStyle.actionText}>댓글</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </tbody>

            <tfoot>
                <div className={IndexStyle.navBar}>
                    <button className={IndexStyle.iconButtonColumn} onClick={onHome}>
                        <FontAwesomeIcon icon={faHouse} className={IndexStyle.iconColumn} />
                        <span>홈</span>
                    </button>

                    <button className={IndexStyle.iconButtonColumn}>
                        <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} className={IndexStyle.iconColumn} onClick={LoginCheck}/>
                        <span>퀘스트</span>
                    </button>

                    <button className={IndexStyle.iconButtonColumn}>
                        <FontAwesomeIcon icon={faMessage} className={IndexStyle.iconColumn}/>
                        <span>커뮤니티</span>
                    </button>

                    <button className={IndexStyle.iconButtonColumn}>
                        <FontAwesomeIcon icon={faBars} className={IndexStyle.iconColumn}/>
                        <span>메뉴</span>
                    </button>
                </div>
            </tfoot>
        </div>
    );
};

export default Index;