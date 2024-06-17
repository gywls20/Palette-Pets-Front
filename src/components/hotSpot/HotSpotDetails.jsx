import {Link} from "react-router-dom";
import Kakao from "./kakaoMap/Kakao.jsx";
// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from "react";
import "../../styles/hotspot/hotSpotDetail.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Button} from "@mui/material";

const HotSpotDetails = () => {

    const dummy = {
        hotSpotId: 1,
        memberNickname: '냥가왈부 관리자',
        createAt: new Date(),
        modifiedAt: new Date(),
        placeName: '승후니 산책 공원',
        simpleContent: '산책 공원',
        content:'반려동물과 산책하세요',
        address: '강남구 11번 출구',
        lat: 37.518124252441055,
        lng: 126.95831639838752,
        countViews: 10,
        imgList: [
            {
                imgHotSpotId: 1,
                imgUrl: 'https://coolenjoy.net/data/editor/2107/59ac272705f0f74ce2e485ca20c30cb936a4fea3.png'
            },
            {
                imgHotSpotId: 2,
                imgUrl: 'https://lh5.googleusercontent.com/p/AF1QipNLMrQtNQCgYjekPAEsldiQaOnIrTFxBHn78CaU=w426-h240-k-no'
            },
            {
                imgHotSpotId: 3,
                imgUrl: 'https://coolenjoy.net/data/editor/2107/59ac272705f0f74ce2e485ca20c30cb936a4fea3.png'
            },
        ]
    };

    const [hotspot, setHotspot] = useState({});

    useEffect(() => {
        // axios로 핫스팟 정보 가져오기
        setHotspot(dummy);
    },[]);

    // eslint-disable-next-line react/prop-types
    const NextArrow = ({ onClick }) => {
        return (
            <Button
                className="slick-next"
                onClick={onClick}
                type="slick-next-button"
            >
            </Button>
        );
    };

// eslint-disable-next-line react/prop-types
    const PrevArrow = ({ onClick }) => {
        return (
            <Button
                className="slick-prev"
                onClick={onClick}
                type="slick-prev-button"
            >
            </Button>
        );
    };

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        slidesPerRow: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <>
            <h1>{hotspot.title} 상세보기</h1>
            {
                <>
                    <h1>{hotspot.id}</h1>
                    <div className="image-list">
                        {hotspot.imgList && (
                            <Slider {...settings}>
                                {hotspot.imgList.map((imgSrc, index) => (
                                    <div key={index}>
                                        <p>{imgSrc.imgHotSpotId}</p>
                                        <img
                                            src={imgSrc.imgUrl}
                                             alt={`Hotspot image ${index + 1}`}
                                            className="centered-image"
                                        />
                                    </div>
                                ))}
                            </Slider>
                        )}
                    </div>
                    <p>{hotspot.placeName}</p>
                    <p>{hotspot.content}</p>
                </>

            }
            {
                hotspot.lat && hotspot.lng && (
                    <Kakao lat={hotspot.lat} lng={hotspot.lng}/>
                )
            }
            <Link to="/hotspot/" className="toList">목록으로</Link>
        </>
    );
}

export default HotSpotDetails;