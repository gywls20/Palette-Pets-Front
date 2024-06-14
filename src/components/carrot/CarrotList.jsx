import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import '../../styles/carrot/CarrotList.css';

function CarrotList() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const sortParam = queryParams.get("sort");

  //초기화 설정
  const [carrot, setCarrot] = useState([]);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState(sortParam || 'carrotId');
  const [dir, setDir] = useState(true);
  const [where, setWhere] = useState('');
  const [hasMore, setHasMore] = useState(true);

  // useEffect(() => {
  //   fetchCarrot();
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   if(sortParam) {
  //     setSort(sortParam);
  //     setCarrot([]);
  //     setPage(1);
  //     setHasMore(true);
  //   }
  // }, [sortParam]);

  // const fetchCarrot = () => {

  // }

  const handleCardClick = () => {
    navigate('/CarrotDetail');
  }

  return (
    <div className="product-list-container">
      <div id="header_content">
        <form onsubmit="submitForm(event)">
          <input class="search_input" type="text" placeholder="물품을 검색해보세요" style={{marginRight:'10px'}}/>
          <button type="submit" class="chat_button">검색하기</button>
        </form>
      </div>
      <div class="filter-buttons-container">
        <div class="filter-buttons">
          <button class="filter-button me-4" data-filter="*">전체</button>
          <button class="filter-button me-4" data-filter="*">판매</button>
          <button class="filter-button me-4" data-filter="*">구매</button>
          <button class="filter-button me-4" data-filter="*">나눔</button>
          <button class="filter-button me-4" data-filter="*">산책</button>
        </div>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic" style={{backgroundColor:"black"}}>
            정렬
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">최신순</Dropdown.Item>
            <Dropdown.Item href="#/action-2">인기순</Dropdown.Item>
            <Dropdown.Item href="#/action-3">오래된 순</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div>
      <div className="product-item-container" onClick={handleCardClick}>
        <div className="product-item">
          <img src="https://media.istockphoto.com/id/177228186/ko/%EC%82%AC%EC%A7%84/%EC%A0%8A%EC%9D%80-%EC%B9%B4%ED%94%BC%EB%B0%94%EB%9D%BC.jpg?s=612x612&w=0&k=20&c=f0TanlK7DhQLrIFpTdzO59r3rvC7YpHdErLsGCBwzCY=" alt="gg" className="product-image" />
          <div className="product-info">
            <h3 className="product-name">얼짱 먼지</h3>
            <p className="product-location">17분 전</p>
            <p className="product-price">100000000원</p>
            <div className="product-interactions">
              <span className="like">
                <i className="fas fa-heart"></i>
                <span className="like-count">관심 3</span>
                <span className="chat-count">채팅 3</span>
              </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-item-container" onClick={handleCardClick}>
        <div className="product-item">
          <img src="https://media.istockphoto.com/id/177228186/ko/%EC%82%AC%EC%A7%84/%EC%A0%8A%EC%9D%80-%EC%B9%B4%ED%94%BC%EB%B0%94%EB%9D%BC.jpg?s=612x612&w=0&k=20&c=f0TanlK7DhQLrIFpTdzO59r3rvC7YpHdErLsGCBwzCY=" alt="gg" className="product-image" />
          <div className="product-info">
            <h3 className="product-name">요염 가을이</h3>
            <p className="product-location">17분 전</p>
            <p className="product-price">100000000원</p>
            <div className="product-interactions">
              <span className="like">
                <i className="fas fa-heart"></i>
                <span className="like-count">관심 3</span>
                <span className="chat-count">채팅 3</span>
              </span>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default CarrotList;
