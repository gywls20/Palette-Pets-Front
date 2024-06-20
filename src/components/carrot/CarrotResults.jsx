import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/carrot/CarrotList.css';

function CarrotResults({carrot}) {
    const navigate = useNavigate();

    //날짜형식 변경
    function getTimeDifference(createdAt) {
        const now = new Date();
        const created = new Date(createdAt);
        const diffInSeconds = Math.floor((now - created) / 1000);

        if (diffInSeconds < 60) {
            return `${diffInSeconds}초 전`;
        } else if (diffInSeconds < 3600) {
            const diffInMinutes = Math.floor(diffInSeconds / 60);
            return `${diffInMinutes}분 전`;
        } else if (diffInSeconds < 86400) {
            const diffInHours = Math.floor(diffInSeconds / 3600);
            return `${diffInHours}시간 전`;
        } else {
            const diffInDays = Math.floor(diffInSeconds / 86400);
            return `${diffInDays}일 전`;
        }
    }


    return (
        <div className="product-list-container">
            {
                carrot.map(carrot =>
                    <div className="product-item-container" onClick={() => navigate(`/carrot/details/${carrot.carrotId}`)}>
                    <div className="product-item" key={carrot.carrotId}>
                        <img src={`https://kr.object.ncloudstorage.com/palettepets/carrot/img/${carrot.img}`} alt="이미지" className="product-image" />
                        <div className="product-info">
                            {carrot.carrotState === 1 ? (<h4 style={{color : "green"}}>거래중</h4>) : null}
                            {carrot.carrotState === 2 ? (<h4 style={{color : "gray"}}>거래완료</h4>) : null}
                            <h3 className="product-name">{carrot.carrotTitle}</h3>
                            <p className="product-location">{getTimeDifference(carrot.carrot_createdAt)}</p>
                            <p className="product-price">{carrot.carrot_price}원</p>
                            <div className="product-interactions">
                            <span className="like">
                                <i className="fas fa-heart"></i>
                                <span className="like-count">관심 {carrot.carrotLike}</span>
                                <span className="chat-count">채팅 ?</span>
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
                )
            }     
        </div>
    );
};

export default CarrotResults;