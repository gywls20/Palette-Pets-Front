import React, { useState, useEffect } from 'react';
import axios, { Axios } from "axios";
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams } from 'react-router-dom';
import {IconButton} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import carrotService from '../../service/carrotService';
import '../../styles/carrot/CarrotDetail.css';
import CarrotMenu from './CarrotMenu';
import kakaoAPI from './kakaoAPI';


const CarrotDetail = () => {
  const navigate = useNavigate();

  const {id} = useParams();
  const [carrot, setCarrot] = useState([]);
  const [visible, setVisible] = useState(false);
  const [state, setState] = useState(carrot.carrotState);

  useEffect(() => {
    fetchCarrot(id);
      carrotService.checkCarrotId(id).then((res) => {
        if(res.data) {
          setVisible(true)
        }else {
          setVisible(false)
        }
      })
  }, [id]);

  const fetchCarrot = (id) => {
    console.log("id = "+id)
    carrotService.getCarrotDetails(id).then((res) => {
      console.log("데이터 === "+res.data.imgList);
      setCarrot(res.data);
      console.log("dlalwldlskdlskd====="+carrot.imgList)
      //setPage(page => page + 1);
      }).catch((err) => { 
        console.log(err)
      });
    }

    //거래 상태 변경
  const handleChange = async (event) => {
    const newValue = parseInt(event.target.value, 10);
    console.log("바뀐 상태ㅋㅋ"+newValue);
    if (newValue !== state) {
      if (window.confirm("상태를 바꾸시겠습니까?")) {
        try {
          // Axios 요청 보내기
          await axios.post(`carrot/state/${id}`, newValue,
            { headers: { 'Content-Type': 'application/json' } }
          ).then((res) => {
            setState(newValue); // 상태 업데이트
          });
        } catch (error) {
          console.error("Error updating carrot state:", error);
        }
      }
    }
  }

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  useEffect(() => {
    // 카카오 SDK 초기화
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init('19b10ccc3aa2bc5c3522f67de2c996da');
    }
  }, []);

  const shareToKakao = () => {
     // 카카오 공유 API 호출
     window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '공유할 제목',
        description: '공유할 내용',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ48C4J0UyxfI5uRwOokboNaqQAQlTn5Qbgmg&s',
        link: {
          webUrl: 'http://localhost:3000',
          mobileWebUrl: 'http://localhost:3000',
        },
      },
      social: {
        likeCount: 10,
        commentCount: 20,
        sharedCount: 30,
      },
      buttons: [
        {
          title: '웹으로 이동',
          link: {
            webUrl: 'https://example.com',
            mobileWebUrl: 'https://example.com',
          },
        },
      ],
    });
  };


    return (
      <>
    <button onClick={shareToKakao}>
      카카오톡으로 공유하기
    </button>
      {visible && <CarrotMenu />}
      <IconButton aria-label="history back" sx={{ marginLeft: '20px', marginTop: '20px', display: 'flex', fontSize: '15pt' }} onClick={() => navigate(-1)}>
        <ArrowBackIcon />
        뒤로
      </IconButton>
      <div className="carrot-detail-container">
      <Carousel slide={false}>
      {carrot.imgList.map((img, index) => (
        <Carousel.Item key={index}>
          <img
            src={`https://kr.object.ncloudstorage.com/palettepets/carrot/img/${img}`}
            alt={`Slide ${index}`}
            height="200"
            width="280"
          />
        </Carousel.Item>
      ))}
    </Carousel>
        <div className="content-container">
          <div className="seller-info">
            <img src="https://d1unjqcospf8gs.cloudfront.net/assets/users/default_profile_80-7e50c459a71e0e88c474406a45bbbdce8a3bf2ed4f2efcae59a064e39ea9ff30.png" alt="Seller" />
            <span className="seller-name">{carrot.memberId}</span>
          </div>
        <div>
        </div>

          <hr/>
          <div style={{ display: visible ? 'block' : 'none' }}>
          <select id="carrotState" value={state} onChange={handleChange}>
            <option value="0" selected={carrot.carrotState === 0}>판매중</option>
            <option value="1" selected={carrot.carrotState === 1}>예약중</option>
            <option value="2" selected={carrot.carrotState === 2}>거래 완료</option>
          </select>
        </div>

          <div className="header">
            <div className="title">{carrot.carrotTitle}</div>
          </div>
          <div className="tags-container">
            <span className="tag">#{carrot.carrotTag}</span>
          </div>
          <div style={{ fontSize: "12px" ,color: "#998e8e"}}>{getTimeDifference(carrot.carrot_createdAt)}</div>
          <div className="description">
            <p>
              {carrot.carrotContent}
            </p>
          </div>
          <div style={{ fontSize: "13px" ,color: "#998e8e"}}>채팅 ? • 관심 {carrot.carrotLike} • 조회 {carrot.carrotView} </div>
          <br/>
          <div className="price-container">
            <div className="price">
                <FontAwesomeIcon icon={faHeart} /> {carrot.carrot_price}원
            </div>
            {carrot.carrotState === 2 ? null : (<button className="chat-button">채팅하기</button>) }
          </div>
        </div>
      </div>
    </>
    );

        //날짜 형식 변경
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
};

export default CarrotDetail;
