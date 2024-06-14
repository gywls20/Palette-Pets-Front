import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import '../../styles/carrot/CarrotDetail.css';

const CarrotDetail = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/CarrotPostForm');
  }

    return (
      <div className="carrot-detail-container">
      <Carousel slide={false}>
        <Carousel.Item>
          <img src="https://media.istockphoto.com/id/177228186/ko/%EC%82%AC%EC%A7%84/%EC%A0%8A%EC%9D%80-%EC%B9%B4%ED%94%BC%EB%B0%94%EB%9D%BC.jpg?s=612x612&w=0&k=20&c=f0TanlK7DhQLrIFpTdzO59r3rvC7YpHdErLsGCBwzCY=" alt="First slide" height="400" width="580" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://media.istockphoto.com/id/177228186/ko/%EC%82%AC%EC%A7%84/%EC%A0%8A%EC%9D%80-%EC%B9%B4%ED%94%BC%EB%B0%94%EB%9D%BC.jpg?s=612x612&w=0&k=20&c=f0TanlK7DhQLrIFpTdzO59r3rvC7YpHdErLsGCBwzCY=" alt="Second slide" height="400" width="580"/>
        </Carousel.Item>
      </Carousel>
        <div className="content-container">
          <div className="seller-info">
            <img src="https://d1unjqcospf8gs.cloudfront.net/assets/users/default_profile_80-7e50c459a71e0e88c474406a45bbbdce8a3bf2ed4f2efcae59a064e39ea9ff30.png" alt="Seller" />
            <span className="seller-name">닉네임</span>
          </div>
          <hr/>
          <div className="header">
            <div className="title">당근 팝니다</div>
          </div>
          <div className="tags-container">
            <span className="tag">#당근</span>
            <span className="tag">#신선</span>
          </div>
          <div style={{ fontSize: "12px" ,color: "#998e8e"}}>5분 전</div>
          <div className="description">
            <p>
              당근을 판매합니다. 신선하고 맛있어요. 빨리 연락주세요!
              이거 맞나요 더 크게 주세요
            </p>
          </div>
          <div style={{ fontSize: "13px" ,color: "#998e8e"}}>채팅 1 • 관심 4 • 조회 55 </div>
          <br/>
          <div className="price-container">
      <div className="price">
        <FontAwesomeIcon icon={faHeart} /> 100,000원
      </div>
      <button className="chat-button" onClick={handleCardClick}>채팅하기</button>
    </div>
        </div>
      </div>
    );
};

export default CarrotDetail;
